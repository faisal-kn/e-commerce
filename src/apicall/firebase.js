
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVki9ooJDZJU9D5F4ycufg9yQKGR2CSlY",
  authDomain: "ecommerce-d4ef2.firebaseapp.com",
  projectId: "ecommerce-d4ef2",
  storageBucket: "ecommerce-d4ef2.appspot.com",
  messagingSenderId: "214975415296",
  appId: "1:214975415296:web:11998de86ddb37d8a544e5",
  measurementId: "G-BG9K5JBS9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app)