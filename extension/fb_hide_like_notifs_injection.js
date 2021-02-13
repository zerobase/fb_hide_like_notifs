const anchor = document.createElement('a');
anchor.appendChild(document.createTextNode("Important Notice from Hide 'Like' Notifications"));
anchor.href = 'https://chrome.google.com/webstore/detail/hide-like-notifications/kbfakkkdllpodegeoggpfcmjabodhpca';
anchor.target = '_blank';
const announcement = document.createElement('p');
announcement.className = 'fb_hide_like_notifs_announcement';
announcement.appendChild(anchor);
const body = document.getElementsByTagName("body")[0];
body.insertBefore(announcement, body.firstChild);
