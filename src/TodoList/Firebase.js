import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCq8P58YaG6acv4g_TRZmS_x7nmpOUQdUM",
  authDomain: "todo-app-7724d.firebaseapp.com",
  projectId: "todo-app-7724d",
  storageBucket: "todo-app-7724d.appspot.com",
  messagingSenderId: "1056084318764",
  appId: "1:1056084318764:web:be37e63dbc90382a9a0f89",
  measurementId: "G-2N8ZE29LMX",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
