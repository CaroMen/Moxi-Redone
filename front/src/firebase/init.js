import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoaXjG3W-eW8DC8jHL_pwmlc1X3gPctcw",
    authDomain: "moxiweb-39d84.firebaseapp.com",
    databaseURL: "https://moxiweb-39d84.firebaseio.com",
    projectId: "moxiweb-39d84",
    storageBucket: "moxiweb-39d84.appspot.com",
    messagingSenderId: "482570207623",
    appId: "1:482570207623:web:16eb82de7f80b4ada59322",
    measurementId: "G-F4P7W9H9Y9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore();