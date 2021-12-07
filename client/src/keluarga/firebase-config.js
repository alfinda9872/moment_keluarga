import {initializeApp} from 'firebase/app';
import { getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuyG922mfsU7T2OFWV4otmjifJsnwbmag",
  authDomain: "silsilah-keluarga-77429.firebaseapp.com",
  projectId: "silsilah-keluarga-77429",
  storageBucket: "silsilah-keluarga-77429.appspot.com",
  messagingSenderId: "176864617498",
  appId: "1:176864617498:web:f8a24991040af83b015da3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);