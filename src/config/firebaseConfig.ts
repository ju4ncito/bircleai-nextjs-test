
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyC81bjLbGwpjEQUslMU9S0L8iPgs2aA44c",
  authDomain: "bircleai-dashboard.firebaseapp.com",
  projectId: "bircleai-dashboard",
  storageBucket: "bircleai-dashboard.appspot.com",
  messagingSenderId: "31502732795",
  appId: "1:31502732795:web:c93262a0d6fc02c01c0f5e",
  measurementId: "G-GB01LV0F6N"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let analytics
if (firebaseConfig?.projectId) {
    if (app.name && typeof window !== 'undefined') {
        analytics = getAnalytics(app);
    }
}

export { app, analytics };