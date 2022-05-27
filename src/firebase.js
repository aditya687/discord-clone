import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDo5CWYJ-bvbQ08-qw_D3ygN9w64VBsRDg",
    authDomain: "discord-clone-5cacc.firebaseapp.com",
    projectId: "discord-clone-5cacc",
    storageBucket: "discord-clone-5cacc.appspot.com",
    messagingSenderId: "973661378805",
    appId: "1:973661378805:web:51336716c7fc9b63f64dbc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;