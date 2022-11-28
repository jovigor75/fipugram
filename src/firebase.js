import firebase from 'firebase/compat/app' //imporrt firebase-a. Izvor sa compat se koristi kad se na Web v9 modular SDK koristi sintaksa iz Web v8 modular SDK 
import 'firebase/compat/firestore' //import firestore-a koji omogućava rad sa firebird bazom
import 'firebase/compat/auth' //import auth modula koji omogućava firebird auentikaciju

var firebaseConfig = { // promjenljiva koja sadrži konfiguraciju firebird projekta. kopira se sa podešavanja iz konzole projekta
  apiKey: "AIzaSyAl8eWXPTfjf9sGLQuPd-QyLS9cjJGr_rI",
  authDomain: "firugram.firebaseapp.com",
  projectId: "firugram",
  storageBucket: "firugram.appspot.com",
  messagingSenderId: "2146385318",
  appId: "1:2146385318:web:adb476f833a6b5fc3e2367"
};

// Initializacija firebase-a
firebase.initializeApp(firebaseConfig);

export { firebase }; // eksport koji omogućava da se eksportovani objekat može importovati i korisititi u drugim fajlovima