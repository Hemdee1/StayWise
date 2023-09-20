import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

interface ipDataProps {
  ip: string;
  location: {
    city: string;
    lat: number;
    lng: number;
    region: string;
    timezone: string;
  };
  isp: string;
}

const Map = () => {
  const [ipData, setIpData] = useState<ipDataProps>({
    ip: "8.8.8.8",
    location: {
      city: "Abuja",
      lat: 9.0765,
      lng: 7.491302,
      region: "",
      timezone: "",
    },
    isp: "Google LLC",
  });

  const myIcon = new Icon({
    iconUrl: "/images/marker.webp",
    iconSize: [32, 32],
  });

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[ipData.location.lat, ipData.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[ipData.location.lat, ipData.location.lng]}
        icon={myIcon}
      >
        <Popup>
          {ipData.location.city} <br /> {ipData.location.region}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
