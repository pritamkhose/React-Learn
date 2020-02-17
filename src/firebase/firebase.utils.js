import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//   apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
//   authDomain: 'crwn-db.firebaseapp.com',
//   databaseURL: 'https://crwn-db.firebaseio.com',
//   projectId: 'crwn-db',
//   storageBucket: 'crwn-db.appspot.com',
//   messagingSenderId: '850995411664',
//   appId: '1:850995411664:web:7ddc01d597846f65'
// };

const config = {
  apiKey: "AIzaSyDrEwW3FbK1L0jflpvE-G0AW1ic-Oexa_o",
  authDomain: "angular8try.firebaseapp.com",
  databaseURL: "https://angular8try.firebaseio.com",
  projectId: "angular8try",
  storageBucket: "angular8try.appspot.com",
  messagingSenderId: "1046212221280",
  appId: "1:1046212221280:web:0e31430a5ea55d38"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;