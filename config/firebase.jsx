import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDuPA8K9kGAw_mbVy_Zc27M-3h41TKd7Uk",
    authDomain: "reactproject-30f02.firebaseapp.com",
    databaseURL: "https://reactproject-30f02-default-rtdb.firebaseio.com",
    projectId: "reactproject-30f02",
    storageBucket: "reactproject-30f02.appspot.com",
    messagingSenderId: "700388663610",
    appId: "1:700388663610:web:aba1b18685029c89adf003"
  };
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;