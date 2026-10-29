importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCUn1nmXERfUiXUh2vRAj-otN-5R7S_COI",
    authDomain: "dallica424site.firebaseapp.com",
    databaseURL: "https://dallica424site-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dallica424site",
    storageBucket: "dallica424site.firebasestorage.app",
    messagingSenderId: "386632929463",
    appId: "1:386632929463:web:254fbd71516164c4413d32",
    measurementId: "G-J6BJGTRVMF"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification ? payload.notification.title : (payload.data ? payload.data.title : 'Dallıca 424 TOKİ');
    const options = {
        body: payload.notification ? payload.notification.body : (payload.data ? payload.data.body : 'Yeni bildiriminiz var.'),
        icon: '/icon.png'
    };

    self.registration.showNotification(title, options);
});
messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || payload.data?.title || 'Dallıca 424 TOKİ';
    const options = {
        body: payload.notification?.body || payload.data?.body || 'Yeni bildiriminiz var.',
        icon: '/icon.png'
    };
    self.registration.showNotification(title, options);
});
