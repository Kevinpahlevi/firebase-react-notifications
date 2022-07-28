// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBRlb96hVDT9i4Pe5jKe2t6BFkS-pVMzPU",
  authDomain: "m21-apps--development.firebaseapp.com",
  projectId: "m21-apps--development",
  storageBucket: "m21-apps--development.appspot.com",
  messagingSenderId: "99815400059",
  appId: "1:99815400059:web:f1b95762f9629282cb38de",
  measurementId: "G-JTZ0NPDC10"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
