// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyB4G-ksiH32a9DakV-l_ZC0X6LjsMH-gdw",
  authDomain: "appongo.firebaseapp.com",
  databaseURL: "https://appongo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appongo",
  storageBucket: "appongo.appspot.com",
  messagingSenderId: "529489309175",
  appId: "1:529489309175:web:a708a9662a2b92487cd2f2",
  measurementId: "G-5RDLFXCWTY",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  console.log(payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
