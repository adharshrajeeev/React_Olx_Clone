import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKTKWmSbHvJnRjyBejFN7znRIiHaIzE0M",
  authDomain: "olxclone-32025.firebaseapp.com",
  projectId: "olxclone-32025",
  storageBucket: "olxclone-32025.appspot.com",
  messagingSenderId: "172150582575",
  appId: "1:172150582575:web:5d9aa57cb20437278f85da",
  measurementId: "G-NS62Z9DEFK"
};

export default firebase.initializeApp(firebaseConfig)