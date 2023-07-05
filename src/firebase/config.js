import { initializeApp } from 'firebase/app'
import { getFirestore ,collection ,addDoc} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCNrXXeGya89lB4JTnHDNL1LU2Hf-wsBkc",
    authDomain: "ticket-form-a25fe.firebaseapp.com",
    projectId: "ticket-form-a25fe",
    storageBucket: "ticket-form-a25fe.appspot.com",
    messagingSenderId: "233779861663",
    appId: "1:233779861663:web:00c066660068bff5362aaa"
  };
 
  const app = initializeApp(firebaseConfig);
  const projectFirestore = getFirestore(app)
  const firestoreCollection = collection(projectFirestore, 'your-collection-name');

  export { projectFirestore, firestoreCollection ,addDoc };