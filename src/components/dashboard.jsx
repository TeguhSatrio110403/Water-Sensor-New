import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import mqtt from 'mqtt';

var options = {
  host: '3a6152cff8674790bcad3c3c23ee9a34.s1.eu.hivemq.cloud',
  port: 8883,
  protocol: 'mqtts',
  username: 'admin',
  password: 'Water123456'
}

var client = mqtt.connect(options);

client.on('connect', function () {
  console.log('Connected');
});

client.on('error', function (error) {
  console.log(error);
});

client.on('message', function (topic, message) {
  console.log('Received message:', topic, message.toString());
});

client.subscribe('home/topic/sensors');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('home/topic/sensors', 'Sir Fai');

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
}

const Dashboard = () => {
  const [position, setPosition] = useState([51.505, -0.09], 1);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting the geolocation", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error("Maps is not supported by this browser.");
    }
  }, []);

  const odometerValuePH = 5.7;
  const odometerValueAccelX= 59; 
  const odometerValueAccelY= 46;
  const odometerValueAccelZ= 26;
  const odometerValueTemp= 34;
  const odometerValueTurbidity= 66;  
  


  return (
    <div>
      <section>
        <h1><center>Maps</center></h1>
        <div className="maps-box" style={{ height: '600px' }}>
          <div className="details" id="map" style={{ height: '580px' }}>
            <MapContainer
              center={position}
              zoom={100}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} />
              <RecenterAutomatically lat={position[0]} lng={position[1]} />
            </MapContainer>
          </div>
        </div>

        <div className="box-feeds row d-flex justify-content-center mx-auto">
          <div className='col mx-auto'>
            <h1><center>Accel X</center></h1>
            <Card className="card mx-auto">
              <Card.Body>
                <Card.Text>
                  <div className="box-odometer">
                  <CircularProgressbar
                      value={odometerValueAccelX}
                      text={`${odometerValueAccelX} m/s²`}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'red',
                        trailColor: 'black'
                      })}
                    />    

                  </div><br />
                  <h5><center>Date ada disini</center></h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col mx-auto'>
            <h1><center>Accel Y</center></h1>
            <Card className="card mx-auto">
              <Card.Body>
                <Card.Text>
                <div className="box-odometer">
                  <CircularProgressbar
                      value={odometerValueAccelY}
                      text={`${odometerValueAccelY} m/s²`}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'red',
                        trailColor: 'black'
                      })}
                    />    

                  </div><br />
                  <h5><center>Date ada disini</center></h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="box-feeds row d-flex justify-content-center mx-auto">
          <div className='col mx-auto'>
            <h1><center>Accel Z</center></h1>
            <Card className="card mx-auto">
              <Card.Body>
                <Card.Text>
                <div className="box-odometer">
                  <CircularProgressbar
                      value={odometerValueAccelZ}
                      text={`${odometerValueAccelZ} m/s²`}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'red',
                        trailColor: 'black'
                      })}
                    />    

                  </div><br />
                  <h5><center>Date ada disini</center></h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col mx-auto'>
            <h1><center>pH Sensor</center></h1>
            <Card className="card mx-auto">
              <Card.Body>
                <Card.Text>
                <div className="box-odometer">
                  <CircularProgressbar
                      value={odometerValuePH}
                      text={`${odometerValuePH} pH`}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'red',
                        trailColor: 'black'
                      })}
                    />    

                  </div><br />
                  <h5><center>Date ada disini</center></h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="box-feeds row d-flex justify-content-center mx-auto">
          <div className='col mx-auto'>
            <h1><center>Temperature Sensor</center></h1>
            <Card className="card mx-auto">
              <Card.Body>
                <Card.Text>
                <div className="box-odometer">
                  <CircularProgressbar
                      value={odometerValueTemp}
                      text={`${odometerValueTemp} °C`}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'red',
                        trailColor: 'black'
                      })}
                    />    

                  </div><br />
                  <h5><center>Date ada disini</center></h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col mx-auto'>
            <h1><center>Turbidity Sensor</center></h1>
            <Card className="card mx-auto">
              <Card.Body>
                <Card.Text>
                <div className="box-odometer">
                  <CircularProgressbar
                      value={odometerValueTurbidity}
                      text={`${odometerValueTurbidity} NTU`}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: 'red',
                        trailColor: 'black'
                      })}
                    />    

                  </div><br />
                  <h5><center>Date ada disini</center></h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;