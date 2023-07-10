//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD8yhyVOsIUvJkdk7KL5wsfRvaX70KEtkk",
    authDomain: "myshop-74682.firebaseapp.com",
    databaseURL: "https://myshop-74682-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myshop-74682",
    storageBucket: "myshop-74682.appspot.com",
    messagingSenderId: "45185425941",
    appId: "1:45185425941:web:5ef7b3108f1621fcb8e41c",
    measurementId: "G-2K71BQSRS7"

};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };