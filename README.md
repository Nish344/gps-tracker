# 🚀 ESP32 GPS Tracker Web UI (Leaflet + Firebase)

A real-time GPS tracking dashboard built for an ESP32 + Neo-6M module.  
This web application displays the **live location**, **historical path**, and includes a built-in **geofence system**.

Frontend uses **Leaflet.js** (OpenStreetMap) and **Firebase Realtime Database**.

---

## ✨ Features

### 📍 Real-Time Location Tracking
- ESP32 pushes GPS data to Firebase.
- Browser receives updates live using `onValue()` listeners.
- Map marker moves instantly without refreshing.

### 🗺️ Historical Path Visualization
- Select From/To timestamps.
- Loads tracked coordinates from Firebase.
- Draws a polyline route on the map.

### 🚧 Geofencing Alerts
- Click “Set Boundary” → define a circular geofence.
- If device moves outside the boundary:
  - Red alert shows instantly.

### 🌍 Free Map Rendering (Leaflet)
- Uses OpenStreetMap tiles.
- No API keys required.
- Completely free for unlimited use.

### 🔥 Firebase Realtime Database
- Stores:
  - `/devices/<DEVICE_ID>/current`
  - `/devices/<DEVICE_ID>/trace`

---

## 📁 Project Structure

```

gps-tracker-web/
│
├── index.html
│
├── /assets
│   ├── /css
│   │    └── style.css
│   └── /js
│        ├── app.js
│        ├── firebase-config.js
│        ├── map.js
│        └── geofence.js
│
└── /libs
├── leaflet.css
├── leaflet.js
└── /images      # required Leaflet marker icons
├── marker-icon.png
├── marker-icon-2x.png
└── marker-shadow.png

```

---

## 🔧 Requirements

- ESP32 sending coordinates to Firebase
- Firebase Realtime Database enabled
- Any static file server, e.g.:
  - VS Code Live Server
  - Python http.server
  - Node http-server

---

## 🛠️ Running the Project

### **Option 1: VS Code (recommended)**

1. Install the **Live Server** extension  
2. Right-click `index.html`  
3. Click **"Open with Live Server"**

Your app will run at:

```

[http://localhost:5500](http://localhost:5500)

```

---

### **Option 2: Python**

```

python3 -m http.server

```

Open:

```

[http://localhost:8000](http://localhost:8000)

````

---

## 🔥 ESP32 Firebase Data Format

Your ESP32 pushes:

```json
{
  "lat": 12.971600,
  "lon": 77.594600,
  "speed_kmph": 10.52,
  "satellites": 5,
  "timestamp": 1712345678
}
````

To:

```
/devices/<DEVICE_ID>/current
/devices/<DEVICE_ID>/trace
```

---

## 🧠 Technology Used

| Feature       | Technology                      |
| ------------- | ------------------------------- |
| Map Rendering | Leaflet.js (OpenStreetMap)      |
| Realtime DB   | Firebase Realtime Database      |
| Frontend      | Vanilla JS + Modular ES imports |
| Hardware      | ESP32 + Neo-6M GPS              |

---

## 🏗️ Architecture Overview

```
ESP32 → Firebase → Browser → Leaflet Map
```

* ESP32 sends GPS JSON every X seconds
* Firebase stores + streams updates
* Browser receives updates in real-time using `onValue(ref, ...)`
* Map updates instantly

---

## 🚀 Deployment

Because it's a static site:

* GitHub Pages (free)
* Netlify
* Vercel
* Firebase Hosting
* Cloudflare Pages

Upload the project folder → works instantly.

---
