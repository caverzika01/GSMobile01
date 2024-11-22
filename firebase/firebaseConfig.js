import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Importando o Firestore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHsVhe0FUodKfi5sxSnUxvHcZGT1U1jAc",
  authDomain: "gsmobile01-f8e7d.firebaseapp.com",
  projectId: "gsmobile01-f8e7d",
  storageBucket: "gsmobile01-f8e7d.firebasestorage.app",
  messagingSenderId: "665633142288",
  appId: "1:665633142288:web:e0e6eafa3df92c73fbfc95",
  measurementId: "G-Z019PM5601"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let auth; 

// Verifica se o Firebase foi inicializado previamente
if (!firebase.apps.length) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  auth = getAuth(app); // Usa a instância existente
}

export { app, db, auth };
