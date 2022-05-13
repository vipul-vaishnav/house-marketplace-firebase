// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASZzioHWdh42VxTsCNHIJ8kyOIYX8i5P0',
  authDomain: 'house-marketplace-app-cd0d3.firebaseapp.com',
  projectId: 'house-marketplace-app-cd0d3',
  storageBucket: 'house-marketplace-app-cd0d3.appspot.com',
  messagingSenderId: '81391296430',
  appId: '1:81391296430:web:0e0be6f890d6d2996ab23f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
