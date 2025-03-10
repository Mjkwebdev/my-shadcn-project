import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS

const LocationMap: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  // Get the user's current location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError(null); // Reset error on success
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setError(
              "You denied the location request. Please allow access to your location."
            );
          } else {
            setError("Failed to retrieve location: " + error.message);
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="w-full h-[250px]">
      {error && (
        <p className="mt-2 text-red-500">
          <span className="font-medium">Error:</span> {error}
        </p>
      )}

      {location ? (
        <MapContainer
          center={location}
          zoom={13}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={location}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="mt-2 text-gray-500">Getting location...</p>
      )}
    </div>
  );
};

export default LocationMap;
