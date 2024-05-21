import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Dashboard = () => {
  const position = [51.505, -0.09];

  return (
    <div>
      <section>
        <div className="maps-box" style={{ height: '600px' }}>
          <div className="details" id="map" style={{ height: '580px' }}>
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} />
            </MapContainer>
          </div>
        </div>

        <div className="courses-box">
          <div className="details">
            <h1>Accel X</h1>
          </div>
        </div>

        <div className="courses-box">
          <div className="details">
            <h1>Accel Y</h1>
          </div>
        </div>

        <div className="courses-box">
          <div className="details">
            <h1>Accel Z</h1>
          </div>
        </div>

        <div className="courses-box">
          <div className="details">
            <h1>Ph Sensor</h1>
          </div>
        </div>

        <div className="courses-box">
          <div className="details">
            <h1>Temperature Sensor</h1>
          </div>
        </div>

        <div className="courses-box">
          <div className="details">
            <h1>Feeds Turbidity Sensor</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;