'use strict';

const CSS_FILE = "fb_hide_like_notifs_injection";

var is_active;

function load_css(file) {
  var link = document.createElement("link");
  link.href = chrome.extension.getURL(file + '.css');
  link.id = file;
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

function unload_css(file) {
  var cssNode = document.getElementById(file);
  cssNode && cssNode.parentNode.removeChild(cssNode);
}

function activate() {
  load_css(CSS_FILE);
  is_active = true;
}

function inactivate() {
  unload_css(CSS_FILE);
  is_active = false;
}

function toggle() {
  if (is_active) {
    inactivate();
  } else {
    activate();
  }
}

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    toggle();
    sendResponse({is_active: is_active, tabId: message.tabId});
  }
);

activate();
