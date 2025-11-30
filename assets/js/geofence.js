import map from "./map.js";

let geofenceCircle = null;

// Enable setting boundary by map click
export function enableGeofence(callback) {
    alert("Click on the map to set the geofence center (radius = 200m)");

    map.once("click", function (e) {
        const center = e.latlng;

        // Remove old fence if exists
        if (geofenceCircle) geofenceCircle.remove();

        geofenceCircle = L.circle(center, {
            radius: 200,
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.2
        }).addTo(map);

        alert("Boundary set!");

        callback(geofenceCircle);
    });
}

// Check if user is outside
export function checkBoundary(lat, lon) {
    if (!geofenceCircle) return false;

    const center = geofenceCircle.getLatLng();
    const radius = geofenceCircle.getRadius();

    const dist = map.distance([lat, lon], center);
    return dist > radius;
}
