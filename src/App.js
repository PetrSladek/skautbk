import logo from './logo/SKAUT_logo.svg';
import './App.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'


function App() {
    return (
        <div id="app">
            <MapContainer id="map" center={[49.3656989, 16.6404402]} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://mapserver.mapy.cz/base-m/{z}-{x}-{y}"
                    url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"
                />

                <Marker position={[49.3682283, 16.6583092]}>
                    <Popup>
                        <h2>Palava (Blansko ev. č. 1883)</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>

                <Marker position={[49.3644675, 16.6454942]}>
                    <Popup>
                        <h2>Růžová 7</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>

                <Marker position={[49.3645531, 16.6454075]}>
                    <Popup>
                        <h2>Růžová 5</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>

                <Marker position={[49.3646756, 16.6454031]}>
                    <Popup>
                        <h2>Růžová 3</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>

                <Marker position={[49.3597722, 16.6388450]}>
                    <Popup>
                        <h2>Komenského 13</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>

                <Marker position={[49.3596828, 16.6386614]}>
                    <Popup>
                        <h2>Komenského 15 (Katolický dům)</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>

                <Marker position={[49.3426133, 16.6612411]}>
                    <Popup>
                        <h2>Dlouhá 167, Klepačov</h2>
                        <p>
                            Tady sídlí kde kdo<br/>
                            <img alt="" src="https://picsum.photos/64/64"/>
                        </p>
                    </Popup>
                </Marker>


            </MapContainer>

            <div id="content">
                <header>
                    <img src={logo} alt="Skaut" width="100"/>
                    <h1>Skauting v Blansku</h1>
                </header>
            </div>
        </div>
    );
}

export default App;
