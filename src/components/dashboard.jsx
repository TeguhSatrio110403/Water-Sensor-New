import {Marker, TileLayer, Popup, MapContainer} from 'react-leaflet'


const dashboard = () => {
    const position = [51.505, -0.09]
  return (
    <div>
      <section>
        <div className="maps-box">
            <div className="details" id='map'>
            <MapContainer   center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
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
}

export default dashboard