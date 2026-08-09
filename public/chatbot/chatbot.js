/* ==========================================================================
   Serenique — real-estate lead-capture chatbot (cloned, vanilla JS)

   A self-contained widget. Include chatbot.css + this file and the widget
   injects itself. Configure by setting window.SERENIQUE_CHATBOT_CONFIG before
   this script loads. See README.md.

   Conversation flow:
     greeting -> interest buttons -> "which configuration" -> BHK buttons
              -> mobile (country code + number) -> thank you -> submit -> /thanks

   Lead pushed to a Google Sheet (via an Apps Script Web App): datetime, mobile,
   project_id (page title minus site name), ip. See README.md + apps-script/Code.gs.
   ========================================================================== */
(function () {
  'use strict';

  // ---------------------------------------------------------------- config
  var C = window.SERENIQUE_CHATBOT_CONFIG || {};
  var settings = {
    agentName:     C.agentName     || 'Sneha Kulkarni',
    imagePath:     C.imagePath     || 'assets/img/chatbot/',
    autoOpenDelay: C.autoOpenDelay != null ? C.autoOpenDelay : 10000, // ms; <=0 disables
    openOnScroll:  C.openOnScroll  !== false,                          // open once past 50%
    messageDelay:  C.messageDelay  != null ? C.messageDelay  : 1000,   // ms typing pause
    teaserText:    C.teaserText    || ('Hi, I am ' + (C.agentName || 'Sneha Kulkarni') + '!'),

    // ---- Lead delivery (Google Sheet via Apps Script Web App) ----
    leadEndpoint:  C.leadEndpoint  || null,   // Apps Script /exec URL. Lead is POSTed here.
    redirectUrl:   C.redirectUrl !== undefined ? C.redirectUrl : '/thanks', // after submit
    projectId:     C.projectId     || null,   // override; default = page title minus site name
    // trailing separators stripped from document.title to get the project id (longest match wins by order)
    siteNameSeparators: C.siteNameSeparators || [' | ', ' - ', ' – ', ' — ', ' · ', ' :: ', ' • '],
    // public-IP lookup (Apps Script can't see the client IP). Set null to skip.
    ipLookupUrl:   C.ipLookupUrl !== undefined ? C.ipLookupUrl : 'https://api.ipify.org?format=json',
    notifyEmail:   C.notifyEmail   || '',    // forwarded to Apps Script (notify_email) for the alert email
    onLead:        C.onLead || function (data) { console.log('[chatbot] Lead captured:', data); }
  };

  // ------------------------------------------------------------- countries
  var countries = [{"value":"+91","text":"+91"},{"value":"+91","text":"India (+91)"},{"value":"+61","text":"Australia (+61)"},{"value":"+973","text":"Bahrain (+973)"},{"value":"+1","text":"Canada (+1)"},{"value":"+852","text":"Hong Kong (+852)"},{"value":"+974","text":"Qatar (+974)"},{"value":"+966","text":"Saudi Arabia (+966)"},{"value":"+65","text":"Singapore (+65)"},{"value":"+27","text":"South Africa (+27)"},{"value":"+971","text":"United Arab Emirates (+971)"},{"value":"+1","text":"USA (+1)"},{"value":"44","text":"UK (+44)"},{"value":"+93","text":"Afghanistan (+93)"},{"value":"+355","text":"Albania (+355)"},{"value":"+213","text":"Algeria (+213)"},{"value":"+1-684","text":"American Samoa (+1-684)"},{"value":"+376","text":"Andorra (+376)"},{"value":"+244","text":"Angola (+244)"},{"value":"+1-264","text":"Anguilla (+1-264)"},{"value":"+672","text":"Antarctica (+672)"},{"value":"+1-268","text":"Antigua and Barbuda (+1-268)"},{"value":"+54","text":"Argentina (+54)"},{"value":"+374","text":"Armenia (+374)"},{"value":"+297","text":"Aruba (+297)"},{"value":"+43","text":"Austria (+43)"},{"value":"+994","text":"Azerbaijan (+994)"},{"value":"+1-242","text":"Bahamas (+1-242)"},{"value":"+880","text":"Bangladesh (+880)"},{"value":"+1-246","text":"Barbados (+1-246)"},{"value":"+375","text":"Belarus (+375)"},{"value":"+32","text":"Belgium (+32)"},{"value":"+501","text":"Belize (+501)"},{"value":"+229","text":"Benin (+229)"},{"value":"+1-441","text":"Bermuda (+1-441)"},{"value":"+975","text":"Bhutan (+975)"},{"value":"+591","text":"Bolivia (+591)"},{"value":"+387","text":"Bosnia and Herzegowina (+387)"},{"value":"+267","text":"Botswana (+267)"},{"value":"+47","text":"Bouvet Island (+47)"},{"value":"+55","text":"Brazil (+55)"},{"value":"+246","text":"British Indian Ocean Territory (+246)"},{"value":"+673","text":"Brunei Darussalam (+673)"},{"value":"+359","text":"Bulgaria (+359)"},{"value":"+226","text":"Burkina Faso (+226)"},{"value":"+257","text":"Burundi (+257)"},{"value":"+855","text":"Cambodia (+855)"},{"value":"+237","text":"Cameroon (+237)"},{"value":"+238","text":"Cape Verde (+238)"},{"value":"+1-345","text":"Cayman Islands (+1-345)"},{"value":"+236","text":"Central African Republic (+236)"},{"value":"+235","text":"Chad (+235)"},{"value":"+56","text":"Chile (+56)"},{"value":"+86","text":"China (+86)"},{"value":"+61","text":"Christmas Island (+61)"},{"value":"+61","text":"Cocos (Keeling) Islands (+61)"},{"value":"+57","text":"Colombia (+57)"},{"value":"+269","text":"Comoros (+269)"},{"value":"+242","text":"Congo Democratic Republic of (+242)"},{"value":"+682","text":"Cook Islands (+682)"},{"value":"+506","text":"Costa Rica (+506)"},{"value":"+225","text":"Cote D'Ivoire (+225)"},{"value":"+385","text":"Croatia (+385)"},{"value":"+53","text":"Cuba (+53)"},{"value":"+357","text":"Cyprus (+357)"},{"value":"+420","text":"Czech Republic (+420)"},{"value":"+45","text":"Denmark (+45)"},{"value":"+253","text":"Djibouti (+253)"},{"value":"+1-767","text":"Dominica (+1-767)"},{"value":"+1-809","text":"Dominican Republic (+1-809)"},{"value":"+670","text":"Timor-Leste (+670)"},{"value":"+593","text":"Ecuador (+593)"},{"value":"+20","text":"Egypt (+20)"},{"value":"+503","text":"El Salvador (+503)"},{"value":"+240","text":"Equatorial Guinea (+240)"},{"value":"+291","text":"Eritrea (+291)"},{"value":"+372","text":"Estonia (+372)"},{"value":"+251","text":"Ethiopia (+251)"},{"value":"+500","text":"Falkland Islands (Malvinas) (+500)"},{"value":"+298","text":"Faroe Islands (+298)"},{"value":"+679","text":"Fiji (+679)"},{"value":"+358","text":"Finland (+358)"},{"value":"+33","text":"France (+33)"},{"value":"+594","text":"French Guiana (+594)"},{"value":"+689","text":"French Polynesia (+689)"},{"value":"+","text":"French Southern Territories (+)"},{"value":"+241","text":"Gabon (+241)"},{"value":"+220","text":"Gambia (+220)"},{"value":"+995","text":"Georgia (+995)"},{"value":"+49","text":"Germany (+49)"},{"value":"+233","text":"Ghana (+233)"},{"value":"+350","text":"Gibraltar (+350)"},{"value":"+30","text":"Greece (+30)"},{"value":"+299","text":"Greenland (+299)"},{"value":"+1-473","text":"Grenada (+1-473)"},{"value":"+590","text":"Guadeloupe (+590)"},{"value":"+1-671","text":"Guam (+1-671)"},{"value":"+502","text":"Guatemala (+502)"},{"value":"+224","text":"Guinea (+224)"},{"value":"+245","text":"Guinea-bissau (+245)"},{"value":"+592","text":"Guyana (+592)"},{"value":"+509","text":"Haiti (+509)"},{"value":"+011","text":"Heard Island and McDonald Islands (+011)"},{"value":"+504","text":"Honduras (+504)"},{"value":"+36","text":"Hungary (+36)"},{"value":"+354","text":"Iceland (+354)"},{"value":"+62","text":"Indonesia (+62)"},{"value":"+98","text":"Iran (Islamic Republic of) (+98)"},{"value":"+964","text":"Iraq (+964)"},{"value":"+353","text":"Ireland (+353)"},{"value":"+972","text":"Israel (+972)"},{"value":"+39","text":"Italy (+39)"},{"value":"+1-876","text":"Jamaica (+1-876)"},{"value":"+81","text":"Japan (+81)"},{"value":"+962","text":"Jordan (+962)"},{"value":"+7","text":"Kazakhstan (+7)"},{"value":"+254","text":"Kenya (+254)"},{"value":"+686","text":"Kiribati (+686)"},{"value":"+850","text":"Korea, Democratic People's Republic of (+850)"},{"value":"+82","text":"South Korea (+82)"},{"value":"+965","text":"Kuwait (+965)"},{"value":"+996","text":"Kyrgyzstan (+996)"},{"value":"+856","text":"Lao People's Democratic Republic (+856)"},{"value":"+371","text":"Latvia (+371)"},{"value":"+961","text":"Lebanon (+961)"},{"value":"+266","text":"Lesotho (+266)"},{"value":"+231","text":"Liberia (+231)"},{"value":"+218","text":"Libya (+218)"},{"value":"+423","text":"Liechtenstein (+423)"},{"value":"+370","text":"Lithuania (+370)"},{"value":"+352","text":"Luxembourg (+352)"},{"value":"+853","text":"Macao (+853)"},{"value":"+389","text":"Macedonia, The Former Yugoslav Republic of (+389)"},{"value":"+261","text":"Madagascar (+261)"},{"value":"+265","text":"Malawi (+265)"},{"value":"+60","text":"Malaysia (+60)"},{"value":"+960","text":"Maldives (+960)"},{"value":"+223","text":"Mali (+223)"},{"value":"+356","text":"Malta (+356)"},{"value":"+692","text":"Marshall Islands (+692)"},{"value":"+596","text":"Martinique (+596)"},{"value":"+222","text":"Mauritania (+222)"},{"value":"+230","text":"Mauritius (+230)"},{"value":"+262","text":"Mayotte (+262)"},{"value":"+52","text":"Mexico (+52)"},{"value":"+691","text":"Micronesia, Federated States of (+691)"},{"value":"+373","text":"Moldova (+373)"},{"value":"+377","text":"Monaco (+377)"},{"value":"+976","text":"Mongolia (+976)"},{"value":"+1-664","text":"Montserrat (+1-664)"},{"value":"+212","text":"Morocco (+212)"},{"value":"+258","text":"Mozambique (+258)"},{"value":"+95","text":"Myanmar (+95)"},{"value":"+264","text":"Namibia (+264)"},{"value":"+674","text":"Nauru (+674)"},{"value":"+977","text":"Nepal (+977)"},{"value":"+31","text":"Netherlands (+31)"},{"value":"+599","text":"Netherlands Antilles (+599)"},{"value":"+687","text":"New Caledonia (+687)"},{"value":"+64","text":"New Zealand (+64)"},{"value":"+505","text":"Nicaragua (+505)"},{"value":"+227","text":"Niger (+227)"},{"value":"+234","text":"Nigeria (+234)"},{"value":"+683","text":"Niue (+683)"},{"value":"+672","text":"Norfolk Island (+672)"},{"value":"+1-670","text":"Northern Mariana Islands (+1-670)"},{"value":"+47","text":"Norway (+47)"},{"value":"+968","text":"Oman (+968)"},{"value":"+92","text":"Pakistan (+92)"},{"value":"+680","text":"Palau (+680)"},{"value":"+507","text":"Panama (+507)"},{"value":"+675","text":"Papua New Guinea (+675)"},{"value":"+595","text":"Paraguay (+595)"},{"value":"+51","text":"Peru (+51)"},{"value":"+63","text":"Philippines (+63)"},{"value":"+64","text":"Pitcairn (+64)"},{"value":"+48","text":"Poland (+48)"},{"value":"+351","text":"Portugal (+351)"},{"value":"+1-787","text":"Puerto Rico (+1-787)"},{"value":"+262","text":"Reunion (+262)"},{"value":"+40","text":"Romania (+40)"},{"value":"+7","text":"Russian Federation (+7)"},{"value":"+250","text":"Rwanda (+250)"},{"value":"+1-869","text":"Saint Kitts and Nevis (+1-869)"},{"value":"+1-758","text":"Saint Lucia (+1-758)"},{"value":"+1-784","text":"Saint Vincent and the Grenadines (+1-784)"},{"value":"+685","text":"Samoa (+685)"},{"value":"+378","text":"San Marino (+378)"},{"value":"+239","text":"Sao Tome and Principe (+239)"},{"value":"+221","text":"Senegal (+221)"},{"value":"+248","text":"Seychelles (+248)"},{"value":"+232","text":"Sierra Leone (+232)"},{"value":"+421","text":"Slovakia (Slovak Republic) (+421)"},{"value":"+386","text":"Slovenia (+386)"},{"value":"+677","text":"Solomon Islands (+677)"},{"value":"+252","text":"Somalia (+252)"},{"value":"+500","text":"South Georgia and the South Sandwich Islands (+500)"},{"value":"+34","text":"Spain (+34)"},{"value":"+94","text":"Sri Lanka (+94)"},{"value":"+290","text":"Saint Helena, Ascension and Tristan da Cunha (+290)"},{"value":"+508","text":"St. Pierre and Miquelon (+508)"},{"value":"+249","text":"Sudan (+249)"},{"value":"+597","text":"Suriname (+597)"},{"value":"+47","text":"Svalbard and Jan Mayen Islands (+47)"},{"value":"+268","text":"Swaziland (+268)"},{"value":"+46","text":"Sweden (+46)"},{"value":"+41","text":"Switzerland (+41)"},{"value":"+963","text":"Syrian Arab Republic (+963)"},{"value":"+886","text":"Taiwan (+886)"},{"value":"+992","text":"Tajikistan (+992)"},{"value":"+255","text":"Tanzania, United Republic of (+255)"},{"value":"+66","text":"Thailand (+66)"},{"value":"+228","text":"Togo (+228)"},{"value":"+690","text":"Tokelau (+690)"},{"value":"+676","text":"Tonga (+676)"},{"value":"+1-868","text":"Trinidad and Tobago (+1-868)"},{"value":"+216","text":"Tunisia (+216)"},{"value":"+90","text":"Turkey (+90)"},{"value":"+993","text":"Turkmenistan (+993)"},{"value":"+1-649","text":"Turks and Caicos Islands (+1-649)"},{"value":"+688","text":"Tuvalu (+688)"},{"value":"+256","text":"Uganda (+256)"},{"value":"+380","text":"Ukraine (+380)"},{"value":"+44","text":"United Kingdom (+44)"},{"value":"+1","text":"United States (+1)"},{"value":"+246","text":"United States Minor Outlying Islands (+246)"},{"value":"+598","text":"Uruguay (+598)"},{"value":"+998","text":"Uzbekistan (+998)"},{"value":"+678","text":"Vanuatu (+678)"},{"value":"+379","text":"Vatican City State (Holy See) (+379)"},{"value":"+58","text":"Venezuela (+58)"},{"value":"+84","text":"Vietnam (+84)"},{"value":"+1-284","text":"Virgin Islands (British) (+1-284)"},{"value":"+1-340","text":"Virgin Islands (U.S.) (+1-340)"},{"value":"+681","text":"Wallis and Futuna Islands (+681)"},{"value":"+212","text":"Western Sahara (+212)"},{"value":"+967","text":"Yemen (+967)"},{"value":"+381","text":"Serbia (+381)"},{"value":"+260","text":"Zambia (+260)"},{"value":"+263","text":"Zimbabwe (+263)"},{"value":"+358","text":"Aaland Islands (+358)"},{"value":"+970","text":"Palestine (+970)"},{"value":"+382","text":"Montenegro (+382)"},{"value":"+44-1481","text":"Guernsey (+44-1481)"},{"value":"+44-1624","text":"Isle of Man (+44-1624)"},{"value":"+44-1534","text":"Jersey (+44-1534)"},{"value":"+599","text":"Curaçao (+599)"},{"value":"+225","text":"Ivory Coast (+225)"},{"value":"+383","text":"Kosovo (+383)"}];

  // -------------------------------------------------------- conversation data
  /* ⚠ Rewritten for Serenique, which is PRE-LAUNCH.
     The stock options offered a brochure, a quotation and inventory that do
     not exist for this project — nothing has been released. Every option below
     is a request to be sent something WHEN it is issued, which is both true
     and the strongest hook a pre-launch page has. Do not re-add "Download
     Brochure" until there is a brochure. */
  var INTEREST_OPTIONS = [
    { text: 'Price list, when released 💸', value: 'Price List' },
    { text: 'Carpet areas & floor plans 📐', value: 'Carpet Areas & Floor Plans' },
    { text: 'Amenity plan 🌳',              value: 'Amenity Plan' },
    { text: 'Book a site visit 🚗',         value: 'Site Visit' },
    { text: 'Details on WhatsApp ✅',       value: 'Details on WhatsApp' },
    { text: 'Get a call back 📞',           value: 'Call Back' }
  ];
  /* 2, 3 and 4 BHK, per the developer's figures of 2026-08-09. The 4 BHK was
     absent here until then because the listing sites this site was built from
     disagreed about it. Keep these in step with `configurations` in
     src/content/project.ts: a button offering a configuration the project
     does not have generates a lead nobody can service. */
  var BHK_OPTIONS = [
    { text: '2 BHK', value: '2_bhk' },
    { text: '3 BHK', value: '3_bhk' },
    { text: '4 BHK', value: '4_bhk' },
    { text: 'Still deciding', value: 'still deciding' }
  ];

  function interestReply(v) {
    if (v === 'Site Visit') return 'Happy to arrange that. The site is at Bavdhan.';
    if (v === 'Call Back') return 'Sure, I will have someone call you.';
    if (v === 'Details on WhatsApp') return 'Sure, I will send it across on WhatsApp.';
    // Price list / carpet areas / amenity plan — none of these is published yet,
    // so the reply says so rather than promising an instant download.
    return 'That has not been released yet. I will make sure you get it the day it is.';
  }
  function configReply(v) {
    if (v === 'still deciding') return 'No problem, I will send you both.';
    return 'Noted, thank you.';
  }

  // --------------------------------------------------------------- state
  var state = {
    conversation: [],
    data: {},
    started: false,
    teaserTimer: null,
    ip: '',
    enquiredFor: 'On Load Chatbot'
  };

  // --------------------------------------------------------------- helpers
  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function nowTime() {
    var d = new Date();
    var h = d.getHours();
    var hh = ('0' + (h > 12 ? h - 12 : (h === 0 ? 12 : h))).slice(-2);
    var mm = ('0' + d.getMinutes()).slice(-2);
    return hh + ':' + mm + ' ' + (h >= 12 ? 'PM' : 'AM');
  }

  // DOM references (set in build())
  var $square, $wrapper, $teaser, $msgTime, $messages, $actions, $footer, $logs;

  function scrollToBottom() { if ($logs) $logs.scrollTo(0, $logs.scrollHeight); }

  // ------------------------------------------------------- message rendering
  // kind: 'plain' | 'start' | 'end' | 'both'  (maps to original text/text_start/...)
  function renderBot(text, kind) {
    var typeClass = { plain: 'text', start: 'text_start', end: 'text_end', both: 'text_start_end' }[kind] || 'text';
    var msg = el('div', 'hb-message ' + typeClass);
    var content = el('div', 'hb-message-content ' + typeClass);
    var span = el('span'); span.textContent = text;
    content.appendChild(span);
    msg.appendChild(content);
    var time = el('span', 'hb_message_time'); time.textContent = nowTime();
    msg.appendChild(time);
    if (kind === 'start') msg.classList.add('start');
    else if (kind === 'end') msg.classList.add('end');
    else if (kind === 'both') { msg.classList.add('start'); msg.classList.add('end'); }
    // drop the "delivered" tick from the previous human bubble
    var flash = $messages.querySelectorAll('.hb_message_time_flash');
    for (var i = 0; i < flash.length; i++) flash[i].remove();
    $messages.appendChild(msg);
    scrollToBottom();
  }

  function renderHuman(text) {
    var msg = el('div', 'hb-message human');
    var content = el('div', 'hb-message-content human text');
    var span = el('span'); span.textContent = text;
    content.appendChild(span);
    var time = el('span', 'hb_message_time'); time.textContent = nowTime();
    msg.appendChild(time);
    msg.appendChild(content);
    var flashWrap = el('span', 'hb_message_time_flash'); flashWrap.setAttribute('style', 'display: block');
    flashWrap.appendChild(el('span', 'material-icons'));
    flashWrap.appendChild(document.createTextNode(nowTime()));
    msg.appendChild(flashWrap);
    $messages.appendChild(msg);
    state.conversation.push({ type: 'response', value: text });
    scrollToBottom();
  }

  function showLoader() {
    removeLoader();
    var msg = el('div', 'hb-message loading-row');
    var content = el('div', 'hb-message-content loading');
    for (var i = 0; i < 5; i++) content.appendChild(el('span', 'dot'));
    msg.appendChild(content);
    $messages.appendChild(msg);
    scrollToBottom();
  }
  function removeLoader() {
    var l = $messages.querySelector('.hb-message-content.loading');
    if (l && l.parentNode) l.parentNode.remove();
  }

  // A single bot beat: typing indicator -> pause -> render.
  function botStep(renderFn) {
    showLoader();
    return wait(settings.messageDelay).then(function () {
      removeLoader();
      renderFn();
    });
  }
  function say(text, kind) {
    return botStep(function () {
      renderBot(text, kind);
      state.conversation.push({ type: 'message', value: text });
    });
  }

  // ------------------------------------------------------------- prompts
  function clearInputs() { $actions.innerHTML = ''; $footer.innerHTML = ''; }

  function submitImg() {
    var b = el('button', 'hb-actions-text-submit', { type: 'button' });
    var img = el('img'); img.src = settings.imagePath + 'email-next.svg';
    b.appendChild(img);
    return b;
  }

  // Buttons (with optional free-text input below). Resolves with chosen value.
  function askButtons(options, withTextInput) {
    return new Promise(function (resolve) {
      var settled = false;
      function choose(value, label) {
        if (settled) return;
        settled = true;
        clearInputs();
        renderHuman(label);
        resolve(value);
      }
      botStep(function () {
        var wrap = el('div');
        var row = el('div', 'hb-actions-buttons');
        options.forEach(function (opt) {
          var b = el('button', 'hb-actions-buttons-button', { type: 'button', value: opt.value });
          b.textContent = opt.text;
          b.addEventListener('click', function () { choose(opt.value, opt.text); });
          row.appendChild(b);
        });
        wrap.appendChild(row);
        $actions.appendChild(wrap);

        if (withTextInput) {
          var fwrap = el('div', 'hb-actions-name');
          var ib = el('div', 'input-bottom');
          var input = el('input', 'chat-elements', { id: 'chat-text', placeholder: 'Write a reply..', type: 'text' });
          var send = submitImg();
          var req = el('div', 'display_none', { id: 'text_required_msg' }); req.textContent = 'This field is required';
          ib.appendChild(input); ib.appendChild(send); ib.appendChild(req);
          fwrap.appendChild(ib); $footer.appendChild(fwrap);
          var submitText = function () {
            var v = input.value.trim();
            if (v === '') { req.style.display = 'block'; return; }
            choose(v, v);
          };
          send.addEventListener('click', submitText);
          input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submitText(); });
        }
        scrollToBottom();
      });
    });
  }

  // Free-text / typed prompt. type controls which collector we render.
  function askInput(type) {
    return botStep(function () { renderPrompt(type); })
      .then(function () { return new Promise(function (resolve) { wirePrompt(type, resolve); }); });
  }

  function renderPrompt(type) {
    if (type === 'mobile') {
      var wrap = el('div', 'hb-actions-mobile');
      var sel = el('select', 'chat-elements country-dropdown', { id: 'chatbot_country_code' });
      countries.forEach(function (c) {
        var o = el('option', null, { value: c.value }); o.textContent = c.text; sel.appendChild(o);
      });
      sel.addEventListener('change', function () {
        var first = sel.options[0];
        first.textContent = sel.value; first.value = sel.value; first.disabled = false;
        sel.selectedIndex = 0;
      });
      var input = el('input', 'chat-elements mobile-text', { id: 'mobile_input', placeholder: 'Enter Your Mobile Number', type: 'number' });
      var send = submitImg();
      var req = el('div', null, { id: 'required_msg' }); req.textContent = 'This field is required';
      wrap.appendChild(sel); wrap.appendChild(input); wrap.appendChild(send); wrap.appendChild(req);
      $footer.appendChild(wrap);
    } else {
      // name | email | company | designation | date | time -> one input in the footer
      var inputType = { email: 'email', date: 'date', time: 'time' }[type] || 'text';
      var ph = (type === 'date' || type === 'time') ? 'Write a reply...' : 'Write a reply...';
      var fwrap = el('div', 'hb-actions-' + (type === 'name' ? 'name' : type));
      var ip = el('input', 'chat-elements', { id: 'chat-' + type, placeholder: ph, type: inputType });
      if (type === 'date') ip.setAttribute('min', new Date().toISOString().slice(0, 10));
      var send2 = submitImg();
      var req2 = el('div', null, { id: 'required_msg' }); req2.textContent = 'This field is required';
      fwrap.appendChild(ip); fwrap.appendChild(send2); fwrap.appendChild(req2);
      $footer.appendChild(fwrap);
    }
    scrollToBottom();
  }

  function wirePrompt(type, resolve) {
    var req = $footer.querySelector('#required_msg');
    var send = $footer.querySelector('.hb-actions-text-submit');
    function done(value, label) { clearInputs(); renderHuman(label); resolve(value); }
    if (type === 'mobile') {
      var sel = $footer.querySelector('#chatbot_country_code');
      var input = $footer.querySelector('#mobile_input');
      var submit = function () {
        var v = input.value.trim();
        if (v === '') { req.style.display = 'block'; return; }
        req.style.display = 'none';
        var code = sel.value, name = sel.options[sel.selectedIndex].text;
        done({ country_code: code, mobile: v, country_name: name }, code + ' ' + v);
      };
      send.addEventListener('click', submit);
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
    } else {
      var ip = $footer.querySelector('#chat-' + type);
      var submit2 = function () {
        var v = ip.value.trim();
        if (v === '') { req.style.display = 'block'; return; }
        req.style.display = 'none';
        done(v, v);
      };
      send.addEventListener('click', submit2);
      ip.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit2(); });
    }
  }

  // ------------------------------------------------------------- the flow
  function start() {
    if (state.started) return;
    state.started = true;
    $msgTime.textContent = 'Today ' + nowTime();
    runFlow();
  }

  function runFlow() {
    say("Hi, I'm " + settings.agentName + ". What would you like to know about Serenique?", 'both')
      .then(function () { return askButtons(INTEREST_OPTIONS, true); })
      .then(function (choice) {
        state.data.invested_for = choice;
        state.data.lookin_for = choice;
        return say(interestReply(choice), 'start');
      })
      .then(function () { return askButtons(BHK_OPTIONS, false); })
      .then(function (config) {
        state.data.configuration = config;
        return say(configReply(config), 'start');
      })
      .then(function () { return collectMobile(); })
      .then(function () { return say('Got it, thank you. Someone from our team will call you shortly, and you are on the list for the first release.', 'both'); })
      .then(function () { submitLead(); });
  }

  function validMobile(m) {
    if (m.country_code === '+91') return /^\d{10}$/.test(m.mobile);
    return true;
  }
  function collectMobile() {
    return say('Please Enter Your Mobile Number...', 'end').then(function () { return askMobileLoop(); });
  }
  function askMobileLoop() {
    return askInput('mobile').then(function (m) {
      if (validMobile(m)) {
        state.data.countryCode = m.country_code;
        state.data.mobile = m.mobile;
        state.data.country_name = m.country_name;
        return;
      }
      return say('Please Enter Valid Mobile Number', 'start')
        .then(function () { return say("What's your mobile number?", 'end'); })
        .then(function () { return askMobileLoop(); });
    });
  }

  // ----------------------------------------------------- lead context
  // Public IP (Apps Script cannot read the client IP, so we fetch it here).
  function captureIp() {
    if (!settings.ipLookupUrl) return;
    try {
      fetch(settings.ipLookupUrl, { cache: 'no-store' })
        .then(function (r) { return r.json(); })
        .then(function (d) { state.ip = (d && (d.ip || d.query)) || ''; })
        .catch(function () {});
    } catch (e) {}
  }

  // Project id = the page title, with the trailing site-name removed.
  function getProjectId() {
    if (settings.projectId) return settings.projectId;
    var t = (document.title || '').trim();
    var seps = settings.siteNameSeparators || [];
    for (var i = 0; i < seps.length; i++) {
      var idx = t.lastIndexOf(seps[i]);
      if (idx > 0) { t = t.slice(0, idx).trim(); break; }
    }
    return t;
  }

  // Maps a stored option value back to the label the visitor actually saw,
  // with the trailing emoji stripped so it reads cleanly in a spreadsheet.
  function labelFor(options, value) {
    if (!value) return '';
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        return options[i].text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\uFE0F]/gu, '').trim();
      }
    }
    return String(value);
  }

  // ------------------------------------------------------------- submit
  function submitLead() {
    var payload = {
      datetime:     new Date().toISOString(),                                   // fallback; sheet stamps its own
      mobile:       (state.data.countryCode || '') + (state.data.mobile || ''), // full international number
      project_id:   getProjectId(),
      ip:           state.ip || '',
      notify_email: settings.notifyEmail || '',                                 // who the Apps Script alerts
      page_path:    location.pathname,
      // The two qualifying answers the conversation already collected. The
      // upstream widget threw these away; they are the most useful thing a
      // salesperson can know before dialling, so they ride along.
      //
      // Sent as the button's own label, not its slug: the sheet is read by
      // people, and "Pricing & Floor Plans - 3 Bhk" beats
      // "pricing_and_floor_plans - 3_bhk".
      interest:      labelFor(INTEREST_OPTIONS, state.data.lookin_for || state.enquiredFor),
      configuration: labelFor(BHK_OPTIONS, state.data.configuration)
    };
    settings.onLead(payload);

    var redirect = function () { if (settings.redirectUrl) window.location.href = settings.redirectUrl; };

    if (settings.leadEndpoint) {
      var done = false;
      var go = function () { if (done) return; done = true; redirect(); };
      try {
        // no-cors + keepalive: fire-and-forget POST that survives the redirect.
        fetch(settings.leadEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          keepalive: true,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: new URLSearchParams(payload).toString()
        }).then(go, go);
      } catch (e) { go(); }
      setTimeout(go, 2000); // safety net if the request stalls
    } else {
      redirect();
    }
  }

  // ------------------------------------------------------- open / close
  function isOpen() { return $wrapper.classList.contains('hb-open'); }

  function openChat(reason) {
    if (reason) state.enquiredFor = reason;
    hideTeaser();
    try { sessionStorage.setItem('chat_close', '2'); } catch (e) {}
    if (isOpen()) return;
    $square.classList.add('hb-hidden');
    $wrapper.classList.add('hb-open');
    start();
    setTimeout(function () {
      var f = $footer.querySelector('input, select');
      if (f) try { f.focus(); } catch (e) {}
    }, 380);
  }
  function closeChat() {
    if (!isOpen()) return;
    $wrapper.classList.remove('hb-open');
    $square.classList.remove('hb-hidden');
    try { sessionStorage.setItem('chat_close', '1'); } catch (e) {}
    scheduleTeaser();
  }
  function showTeaser() {
    if (isOpen()) return;
    $teaser.style.display = 'block';
    // restart the entrance animation each time it reappears
    $teaser.style.animation = 'none';
    void $teaser.offsetWidth;
    $teaser.style.animation = '';
  }
  function hideTeaser() { $teaser.style.display = 'none'; }
  function scheduleTeaser() {
    clearTimeout(state.teaserTimer);
    state.teaserTimer = setTimeout(showTeaser, 5000);
  }

  /* ⚠ Font injection deliberately REMOVED.
     Upstream this fetched Bricolage Grotesque and Plus Jakarta Sans from
     fonts.googleapis.com on every page load. Three reasons it is gone:
     the site already loads Fraunces and Manrope through next/font and
     chatbot.css inherits them via --font-display-src / --font-body-src, so
     these were two extra families nothing rendered in; it is a third-party
     request the privacy policy does not declare; and it blocked render on a
     widget that is not above the fold. Do not restore it. */

  function build() {
    // optional override of the bot-name label baked into the CSS pseudo-elements
    if (settings.agentName !== 'Sneha Kulkarni') {
      var st = el('style');
      st.textContent = '#leadgenie-root .hb-message.start::before{content:"' + settings.agentName.replace(/"/g, '\\"') + '";}';
      document.head.appendChild(st);
    }

    // launcher
    $square = el('div', null, { id: 'chat-square', role: 'button', tabindex: '0', 'aria-label': 'Open chat with ' + settings.agentName });

    // teaser
    $teaser = el('div', 'chat-pop-sm');
    var tClose = el('button', 'close', { id: 'chat-pop-sm-close', type: 'button', 'aria-label': 'Close' });
    tClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    var tTxt = el('div', 'chat-pop-txt');
    tTxt.innerHTML = settings.teaserText + ' <strong>How can I help you?</strong>';
    var tBtn = el('button', 'chat-pop-sm-btn openchat', { id: 'chat-square-small', type: 'button' });
    tBtn.textContent = "Let's Chat";
    $teaser.appendChild(tClose); $teaser.appendChild(tTxt); $teaser.appendChild(tBtn);

    // window
    $wrapper = el('div', 'chat-wrapper', { role: 'dialog', 'aria-label': 'Chat with ' + settings.agentName });

    var header = el('div', 'chat-header');
    var photo = el('div', 'chat-header-photo'); photo.appendChild(el('span', 'active-circle'));
    var meta = el('div', 'chat-header-meta');
    var hname = el('div', 'chat-header-name'); hname.textContent = settings.agentName;
    var status = el('div', 'chat-header-status'); status.textContent = 'Online • Replies instantly';
    meta.appendChild(hname); meta.appendChild(status);
    var hActions = el('div', 'chat-header-actions');
    var closeBtn = el('button', 'chat-close-btn', { type: 'button', 'aria-label': 'Close chat' });
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    hActions.appendChild(closeBtn);
    header.appendChild(photo); header.appendChild(meta); header.appendChild(hActions);

    var body = el('div', 'chat-box-body');
    $logs = el('div', 'chat-logs');
    var bot = el('div', null, { id: 'hb-chat-bot' });
    var container = el('div', 'chat-container');
    $msgTime = el('div', 'chat-messages-time');
    $messages = el('div', 'chat-messages-container');
    $actions = el('div', 'chat-actions-container');
    container.appendChild($msgTime); container.appendChild($messages); container.appendChild($actions);
    bot.appendChild(container); $logs.appendChild(bot);
    $footer = el('div', 'chat-footer');
    body.appendChild($logs); body.appendChild($footer);

    $wrapper.appendChild(header); $wrapper.appendChild(body);

    // one scoped root element so the widget's CSS is isolated from the theme /
    // Elementor reset.css (all styles are scoped under #leadgenie-root).
    var root = el('div', null, { id: 'leadgenie-root' });
    root.appendChild($square);
    root.appendChild($teaser);
    root.appendChild($wrapper);
    document.body.appendChild(root);

    // wiring
    $square.addEventListener('click', function () { openChat('Chat Profile Icon'); });
    $square.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChat('Chat Profile Icon'); }
    });
    tBtn.addEventListener('click', function () { openChat('Small Chat Window'); });
    closeBtn.addEventListener('click', closeChat);
    tClose.addEventListener('click', hideTeaser);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen()) closeChat(); });
  }

  // ------------------------------------------------------------- lifecycle
  function initLifecycle() {
    // auto-open after delay (unless the user already closed it this session)
    if (settings.autoOpenDelay > 0) {
      setTimeout(function () {
        var closed = false;
        try { closed = sessionStorage.getItem('chat_close') === '1'; } catch (e) {}
        if (!closed) openChat('On Load Chatbot');
      }, settings.autoOpenDelay);
    }
    // open once on scroll past 50%
    if (settings.openOnScroll) {
      var fired = false;
      window.addEventListener('scroll', function () {
        if (fired) return;
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight / 2) {
          fired = true;
          openChat('On Scroll Chatbot');
        }
      });
    }
  }

  function boot() { build(); initLifecycle(); captureIp(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // public API
  window.SereniqueChatbot = {
    open: function () { openChat('API'); },
    close: closeChat,
    config: settings
  };
})();
