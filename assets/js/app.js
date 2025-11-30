import { DB, DEVICE } from "./firebase-config.js";

// Import Firebase v10 functions
import {
    ref,
    onValue,
    get,
    child
} from "database-url";

import map, { updateCurrentPosition, drawPath } from "./map.js";
import { enableGeofence, checkBoundary } from "./geofence.js";

// ----------------------------
// 1️⃣ LIVE LOCATION LISTENER
// ----------------------------
const currentRef = ref(DB, `/devices/${DEVICE}/current`);

onValue(currentRef, (snapshot) => {
    const d = snapshot.val();
    if (!d) return;

    updateCurrentPosition(d.lat, d.lon);

    const alertBox = document.getElementById("alert");
    alertBox.innerText = checkBoundary(d.lat, d.lon)
        ? "⚠ OUT OF BOUNDARY!"
        : "";
});

// ----------------------------
// 2️⃣ LOAD PATH (BETWEEN TIMES)
// ----------------------------
document.getElementById("loadPath").onclick = async () => {
    const from = new Date(document.getElementById("fromTime").value).getTime() / 1000;
    const to = new Date(document.getElementById("toTime").value).getTime() / 1000;

    const traceRef = ref(DB, `/devices/${DEVICE}/trace`);
    const snapshot = await get(traceRef);

    let pts = [];
    snapshot.forEach(childSnap => {
        const d = childSnap.val();
        if (d.timestamp >= from && d.timestamp <= to) {
            pts.push([d.lat, d.lon]);
        }
    });

    drawPath(pts);
};

// ----------------------------
// 3️⃣ GEOFENCE BUTTON
// ----------------------------
document.getElementById("setGeofence").onclick = () => {
    enableGeofence(() => {});
};
