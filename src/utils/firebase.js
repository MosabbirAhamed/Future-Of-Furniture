
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYXUTqkj3cph1x1ysghfI_aS2RLkSaAT0",
    authDomain: "furniture-e-commerce-6e016.firebaseapp.com",
    projectId: "furniture-e-commerce-6e016",
    storageBucket: "furniture-e-commerce-6e016.appspot.com",
    messagingSenderId: "904513689083",
    appId: "1:904513689083:web:2347205c30a8d76f8ae75e"
  };


  const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

  const auth = app.auth();
  
  export { auth }