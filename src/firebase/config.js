import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDkxIfw3RmMOXInKRqs1OKYAUnWDe5kogE",
  authDomain: "falta-b5ac4.firebaseapp.com",
  projectId: "falta-b5ac4",
  storageBucket: "falta-b5ac4.firebasestorage.app",
  messagingSenderId: "1051319000791",
  appId: "1:1051319000791:web:706df83945ef0456a71a92"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);