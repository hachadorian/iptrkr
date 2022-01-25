import React, { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import marker from "../assets/icon-location.svg";

const Map = ({ data }) => {
  const [map, setMap] = useState(null);
  const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
  });

  useEffect(() => {
    if (map && data) {
      map.flyTo([data.location.lat, data.location.lng]);
    }
  }, [data, map]);

  return (
    <MapContainer
      center={data ? [data.location.lat, data.location.lng] : [51.505, -0.09]}
      zoom={13}
      style={{ height: "100%" }}
      zoomControl={false}
      whenCreated={(map) => setMap(map)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          data ? [data.location.lat, data.location.lng] : [51.505, -0.09]
        }
        icon={myIcon}
      ></Marker>
    </MapContainer>
  );
};

export default Map;
