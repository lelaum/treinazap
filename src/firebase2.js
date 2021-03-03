import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDynmYTaQONxnHKXuTKh1hxcR_5aD01CCU",
    authDomain: "treinazap-9f069.firebaseapp.com",
    projectId: "treinazap-9f069",
    storageBucket: "treinazap-9f069.appspot.com",
    messagingSenderId: "569888061402",
    appId: "1:569888061402:web:f6e6346c902160b3c0f2e3"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
