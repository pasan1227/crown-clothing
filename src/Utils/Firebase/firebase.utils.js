import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPVs40By7glPYsvIEYdCCLM_kKJia65G4",
  authDomain: "crown-clothing-c1b0f.firebaseapp.com",
  projectId: "crown-clothing-c1b0f",
  storageBucket: "crown-clothing-c1b0f.appspot.com",
  messagingSenderId: "997483246367",
  appId: "1:997483246367:web:08b70ba40851476f82b62a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
