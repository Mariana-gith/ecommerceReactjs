import firebase from "firebase";
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCyjvAlYOKXe73YC7UzjNt8V1isRluu_fU",
    authDomain: "ecommercereactjs-5a701.firebaseapp.com",
    projectId: "ecommercereactjs-5a701",
    storageBucket: "ecommercereactjs-5a701.appspot.com",
    messagingSenderId: "400375548512",
    appId: "1:400375548512:web:0f8614ea07661d07731105"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}