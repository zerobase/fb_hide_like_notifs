const url_regex = /^https:\/\/www.facebook.com\/.*/;
const url_pattern = "https://www.facebook.com/*";

const ICON_ON = "icon_on_48.png";
const ICON_OFF = "icon_off_48.png";


function set_icon(tabId, file) {
  chrome.pageAction.setIcon({tabId: tabId, path: file});
}

function initialize_tab(tab) {
  chrome.pageAction.show(tab.id);
  set_icon(tab.id, ICON_ON);
}

function initialize_tab_if_matched(tab) {
  if (tab.url.match(url_regex)) {
    initialize_tab(tab);
  }
}

function cb_message (response) {
  icon = response.is_active ? ICON_ON : ICON_OFF;
  set_icon(response.tabId, icon);
}

chrome.tabs.onCreated.addListener(function (tab) {
  initialize_tab_if_matched(tab);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  initialize_tab_if_matched(tab);
});

chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {action: "toggle", tabId: tab.id}, cb_message);
});

// TODO: Faild to initialize tabs (Content script hasn't been loaded?)
//chrome.tabs.query({url: url_pattern}, function(tabs) { tabs.map(initialize_tab); })
