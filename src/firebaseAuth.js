// src/firebase.js
import { getAuth } from "firebase/auth";
import { app } from "./Config/firebaseConfig"
export const auth = getAuth(app);