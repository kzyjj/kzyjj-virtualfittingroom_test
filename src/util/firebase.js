import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDS3JRvYDyOEnd_Qpj_iQK0Wl2NvJOKjpo",
    authDomain: "virtual-fittingroom.firebaseapp.com",
    projectId: "virtual-fittingroom",
    storageBucket: "virtual-fittingroom.appspot.com",
    messagingSenderId: "245868406897",
    appId: "1:245868406897:web:750cb8717e2445726753d0"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
export const app = initializeApp(firebaseConfig)
export const storage= getStorage(app)