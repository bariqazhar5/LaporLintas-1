import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // tambahkan import Footer
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LiveLocation.css';

// Fix marker path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function LiveLocation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/get_laporan.php')
      .then((res) => res.json())
      .then((laporan) => setData(laporan))
      .catch((err) => console.error('Gagal mengambil data:', err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="text-center bg-light py-4 border-bottom">
        <h2 className="fw-bold">Live Location</h2>
      </div>

      <div className="container-fluid px-0">
        <MapContainer
          center={[-6.9, 107.6]}
          zoom={13}
          style={{ height: '80vh', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.map((lapor) => (
            <Marker
              key={lapor.id}
              position={[lapor.latitude, lapor.longitude]}
              icon={new L.Icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                iconSize: [30, 30],
                iconAnchor: [15, 30],
              })}
            >
              <Popup>
                <strong>{lapor.nama}</strong><br />
                <span>{lapor.deskripsi}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <Footer /> {/* ⬅️ Tambahkan ini */}
    </>
  );
}

export default LiveLocation;
