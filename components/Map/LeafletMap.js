import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const position = [51.505, -0.09];

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
