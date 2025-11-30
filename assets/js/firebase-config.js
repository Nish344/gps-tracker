// Firebase imports (v10 modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your config
const firebaseConfig = {
    apiKey: "AIzaSyDA7PzIyjaDi333-oFJK3VXt8d2vVQ0kNE",
    authDomain: "gps-tracker-bd935.firebaseapp.com",
    databaseURL: "https://gps-tracker-bd935-default-rtdb.firebaseio.com",
    projectId: "gps-tracker-bd935",
    storageBucket: "gps-tracker-bd935.firebasestorage.app",
    messagingSenderId: "483590404010",
    appId: "1:483590404010:web:bc4d1f0f1b68c9ee9e5dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export DB and DEVICE for use in other modules
export const DB = getDatabase(app);
export const DEVICE = "esp32_device_1";
