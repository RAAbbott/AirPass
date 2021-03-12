const firebaseConfig = {
    apiKey: "AIzaSyC_irb_W5R_jc0PlWslahBu0SdUkwppmpQ",
    authDomain: "airpassdev.firebaseapp.com",
    projectId: "airpassdev",
    storageBucket: "airpassdev.appspot.com",
    messagingSenderId: "89413303707",
    appId: "1:89413303707:web:1038309b03d4ea9e21753e",
    measurementId: "G-5Q1Q4FH2BV"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const storage = firebase.storage();
export default firebase