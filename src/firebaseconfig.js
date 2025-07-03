import firebase from 'firebase/app';
import 'firebase/auth';  // Se for usar autenticação
import 'firebase/firestore';  // Se for usar o Firestore, por exemplo

// Configuração do Firebase que você copiou do console
const firebaseConfig = {
  apiKey: "AIzaSyBE5cl3UTJ_-MwFtijSerIpJ7tjH1wtR6o",
  authDomain: "heroes-boardgame.firebaseapp.com",
  projectId: "heroes-boardgame",
  storageBucket: "heroes-boardgame.firebasestorage.app",
  messagingSenderId: "59573050114",
  appId: "1:59573050114:web:3fffab5cf8d09c1566001b",
  measurementId: "G-BR1H4SY5PZ"
};

// Inicialize o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Se já foi inicializado, usa o app atual
}

export { firebase };
