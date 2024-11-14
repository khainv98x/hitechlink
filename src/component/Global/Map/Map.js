import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconmap from "../../../assets/icon/iconmap.png"
// Tạo icon tùy chỉnh
const customIcon = L.icon({
  iconUrl: iconmap,
  iconSize: [32, 32], // Kích thước của icon
  iconAnchor: [16, 32], // Điểm neo của icon (điểm này sẽ nằm ở vị trí chính xác trên bản đồ)
  popupAnchor: [0, -32] // Điểm neo của popup so với icon
});

const Map = () => {
  return (
    <MapContainer
      center={[10.808938, 106.669975]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Sử dụng icon tùy chỉnh cho Marker */}
      <Marker position={[10.808938, 106.669975]} icon={customIcon}>
        <Popup>
          Hitechlink - Chúng tôi vì bạn
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
