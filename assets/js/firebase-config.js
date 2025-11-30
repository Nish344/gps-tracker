// Firebase imports (v10 modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your config
const firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<AUTH_DOMAIN>",
    databaseURL: "<DATABASE_URL>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_SENDER_ID>",
    appId: "<APP_ID>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export DB and DEVICE for use in other modules
export const DB = getDatabase(app);
export const DEVICE = "Device_Name";
