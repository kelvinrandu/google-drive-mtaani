// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOw8xJ5bmlGbJLnNZE5qUBxy8H0DArWq0",
    authDomain: "drive-mtaani.firebaseapp.com",
    projectId: "drive-mtaani",
    storageBucket: "drive-mtaani.appspot.com",
    messagingSenderId: "908407820164",
    appId: "1:908407820164:web:495a8e214023be63bbd7d1",
    measurementId: "G-15JN4M3HFK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebaseConfig.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseConfig.firestore()

  export {auth, provider, db, storage}