// src/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Required for map styling
import L from 'leaflet';

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const position = [51.505, -0.09]; // Example coordinates (London)

  return (
    <div style={{ height: "500px" }}>
      <MapContainer center={position} zoom={13}  style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} onChange={(e)=> {
        console.log(e)
        setCoordinates({lat: e.center.lat, lng:e.center.lng})
      }}>
          <Popup>
            A sample popup on the map.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
