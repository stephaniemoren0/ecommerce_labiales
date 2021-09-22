import firebase from "firebase";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChugqzUzbSdXVmDR_dXRRYUVn3xxh9cw0",
    authDomain: "ecommerce-labiales.firebaseapp.com",
    projectId: "ecommerce-labiales",
    storageBucket: "ecommerce-labiales.appspot.com",
    messagingSenderId: "973661064497",
    appId: "1:973661064497:web:ac4b0a73ec153f2017f410"
};

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}