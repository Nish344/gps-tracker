// ----------------------
// Leaflet Map Setup
// ----------------------
let map = L.map("map").setView([12.9716, 77.5946], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

let marker = L.marker([12.9716, 77.5946]).addTo(map);

let pathPolyline = L.polyline([], {
    color: "blue",
    weight: 4
}).addTo(map);

// Update marker + center map
export function updateCurrentPosition(lat, lon) {
    marker.setLatLng([lat, lon]);
    map.setView([lat, lon]);
}

// Draw filtered path
export function drawPath(points) {
    pathPolyline.setLatLngs(points);
    if (points.length) map.setView(points[0]);
}

export default map;
