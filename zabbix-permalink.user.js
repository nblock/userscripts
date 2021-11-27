// ==UserScript==
// @name        Zabbix: Add permalink to footer
// @description Add a permalink with the current filter settings to the footer
// @namespace   https://nblock.org
// @match       https://zabbix.example.com/*
// @grant       none
// @author      nblock <site-github@nblock.org>
// @version     0.1
// ==/UserScript==

// NOTE: Add your Zabbix URLs above with one or more @match blocks.

document.querySelectorAll('form').forEach((form) => {
  if (form.name === 'zbx_filter') {
    const url = new URL(location.pathname, location.origin);
    url.search = new URLSearchParams(new FormData(form)).toString();

    var a = document.createElement('a');
    a.appendChild(document.createTextNode('Permalink'));
    a.title = 'Permalink with currently applied filters';
    a.href = url.toString();

    var getFooter = document.getElementsByTagName('footer')[0];
    getFooter.insertAdjacentHTML('beforeend', ', ');
    getFooter.insertAdjacentHTML('beforeend', a.outerHTML);
  }
});
