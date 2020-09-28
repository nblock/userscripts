// ==UserScript==
// @name        Grape: Linkify
// @description Add backlinks to service integrations such as from Grape to Jira
// @namespace   https://nblock.org
// @match       https://uebergrape.staging.chatgrape.com/chat/*
// @grant       none
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/nblock/userscripts/master/grape-linkify.user.js
// @updateURL   https://raw.githubusercontent.com/nblock/userscripts/master/grape-linkify.user.js
// @author      nblock <site-github@nblock.org>
// @version     0.3
// ==/UserScript==

var jira_regex = /(^[A-Z]+-[0-9]+) .*/;
var jira_url = "https://jira.ubergrape.com/browse/";

linkify_jira = function(mutation) {
  var title = document.querySelector('main > div:first-child h1');
  var mo = jira_regex.exec(title.innerHTML);
  if (Array.isArray(mo) && mo.length > 1) {
    title.innerHTML = '<a href="' + jira_url + mo[1] + '" target="_blank" rel="noopener noreferrer">' + mo[0] + '</a>';
  }
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    linkify_jira(mutation);
  });
});
observer.observe(document.querySelector('head > title'), {childList: true});
