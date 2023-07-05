import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGvnU4XGj5H8l8WDZFmXYw7arZTrPN7vA",
    authDomain: "vue-ticket-d6728.firebaseapp.com",
    projectId: "vue-ticket-d6728",
    storageBucket: "vue-ticket-d6728.appspot.com",
    messagingSenderId: "731304925639",
    appId: "1:731304925639:web:532c8a4ba58ca6831161e2",
    measurementId: "G-QLC4SYWWCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
