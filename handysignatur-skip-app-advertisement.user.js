// ==UserScript==
// @name        Handysignatur: Skip TAN App advertisement
// @description Automatically skip the advertisement for the TAN App which is show on each login.
// @namespace   https://nblock.org
// @match       https://www.handy-signatur.at/mobile/https-security-layer-request/*
// @grant       none
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/nblock/userscripts/master/handysignatur-skip-app-advertisement.user.js
// @updateURL   https://raw.githubusercontent.com/nblock/userscripts/master/handysignatur-skip-app-advertisement.user.js
// @author      nblock <site-github@nblock.org>
// @version     0.1
// ==/UserScript==

document.querySelector('input#NextBtn[value="Weiter ohne App"]').click();
