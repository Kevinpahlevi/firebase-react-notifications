import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBRlb96hVDT9i4Pe5jKe2t6BFkS-pVMzPU",
  authDomain: "m21-apps--development.firebaseapp.com",
  projectId: "m21-apps--development",
  storageBucket: "m21-apps--development.appspot.com",
  messagingSenderId: "99815400059",
  appId: "1:99815400059:web:f1b95762f9629282cb38de",
  measurementId: "G-JTZ0NPDC10"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound, setToken) => {
  return getToken(messaging, {vapidKey: 'BDlOhLkitQTBu-tphA0sEIHhzLkmc0J_8eEH-Ir4IEWNwKTpzb2DMfsez5iIeBvjJNSp1iSbOaRoHhvttI8DD2k'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      setToken(currentToken)
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      setToken("")
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});