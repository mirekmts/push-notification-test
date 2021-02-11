importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBVyN-jJHQLY59W4ZWAOZgtvazI8WkqGNQ",
    authDomain: "matches-alarm.firebaseapp.com",
    databaseURL: "https://matches-alarm.firebaseio.com",
    projectId: "matches-alarm",
    storageBucket: "matches-alarm.appspot.com",
    messagingSenderId: "63594166448",
    appId: "1:63594166448:web:d10ebe1736913a38536375",
    measurementId: "G-8FLL0PT3ZF"
});
const messaging = firebase.messaging();

console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 16 ~ messaging.onBackgroundMessage ~ messaging", messaging)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };
  const options = {
    body: 'This notification has data attached to it that is printed ' +
      'to the console when it\'s clicked.',
    tag: 'data-notification',
    badge: 'badge string',

    actions: [{action: "get", title: "Get now."}],
    data: {
      time: new Date(Date.now()).toString(),
      message: 'Hello, World!'
    }
  };
  const options2 = {
    // "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
    // "tag": "request",
    "actions": [{action: "get", title: "Get now.", placeholder: 'hej'}],
    // "actions": [
    //   { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
    //   { "action": "no", "title": "No", "icon": "images/no.png" }
    // ]
  }
  self.registration.showNotification('hej4', options);
  const maxActions = Notification.maxActions;
  // const m = Notification('mirek', {
  //   actions: [{action: "get", title: "Get now."}],
  //   badge: 'badge string',
  //   body: ' body string',
  //   data: new Date(),
  // })
  // console.log(m)
  console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 45 ~ messaging.onBackgroundMessage ~ Notification", Notification)
  console.log('This device can display at most a' + maxActions + ' actions on each notification.');
  // self.registration.showNotification('Notification with Data', options);
  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});
console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 25 ~ messaging.onBackgroundMessage ~ self", self)
self.addEventListener('notificationclick', function(event) {
  console.log("🚀 ~ file: firebase-messaging-sw.js ~ line 51 ~ self.addEventListener ~ event", event)
  event.notification.close();
  if (event.action === 'get') {
    synchronizeReader();
  } else {
    clients.openWindow("/reader");
  }
}, false);
