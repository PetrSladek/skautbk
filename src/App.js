import './App.scss';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {List} from "./List";
import {data} from './data';


function App() {

    let map = null;
    const defaultCoords = [49.3656989, 16.6404402];
    const defaultZoom = 14;

    const handleOnChangeLocation = (coords, zoom) => map && map.flyTo(coords, zoom);
    const handleFindNearby = () => {
        if (!map)
        {
            return;
        }

        map.on('locationfound', (location) => {

            console.log('location found:', location)

            let nearestDistance = null;
            let nearestHouse = null;
            Object.values(data.houses).forEach((house) => {
                const distance = location.latlng.distanceTo(house.coords);
                if (nearestDistance < distance || nearestDistance === null) {
                    nearestDistance = distance;
                    nearestHouse = house;
                }
            })

            console.log('Nearest house is', nearestHouse.name, ' distance is ', nearestDistance);
            map.flyTo(nearestHouse.coords, 18);
        });
        map.locate();
    }

    const handleReset = () => map && map.flyTo(defaultCoords, defaultZoom);


    return (
        <div id="app">

            <List
                units={data.units}
                troops={data.troops}
                houses={data.houses}
                onChangeLocation={handleOnChangeLocation}
            />

            <MapContainer
                id="map"
                whenCreated={createdMap => map = createdMap}
                center={defaultCoords}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                zoomControl={false}
                doubleClickZoom={false}
                dragging={false}
            >


                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://mapserver.mapy.cz/base-m/{z}-{x}-{y}"
                    url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"
                />

                {Object.values(data.houses).map((house, inx) =>
                    <Marker key={inx} position={house.coords}>
                        <Popup>
                            <h2>{house.name}</h2>
                            <p>
                                Tady sídlí kde kdo<br/>
                                {house.image && <img alt="" src={house.image} />}
                            </p>
                        </Popup>
                    </Marker>
                )}

                <div className="buttons">
                    <button  className="btn btn-secondary" type="button" onClick={handleFindNearby}>Najít nejbližší klubovnu</button>
                    {' '}
                    <button  className="btn btn-secondary" type="button"onClick={handleReset}>Vrátit na celkový pohled</button>
                </div>

                <div className="copyright print" title=" Seznam.cz, a.s., 2021 |  OpenStreetMap" style={{position: 'absolute', inset: 'auto auto 3px 5px'}}>
                    © <a href="https://o.seznam.cz" target="_blank" rel="noopener">Seznam.cz, a.s.</a>, 2021 a <a href="#" data-others="1">další</a>
                </div>
                <a className="copyright print" target="_blank" href={"https://mapy.cz/?x=" + defaultCoords[1] + "&y=" + defaultCoords[0] + "&z=" + defaultZoom} style={{position: 'absolute', inset: 'auto 0px 0px auto'}}>
                    <img src="https://api.mapy.cz/img/api/logo.svg" alt="Zobrazit na Mapy.cz" />
                </a>

            </MapContainer>

            <div id="actions">

                <div className="list-group">
                    <a href="https://blansko.skauting.cz" target="_blank" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">100 let skautingu v Blansku</h5>
                            <small>22.2. - 31.12.2021</small>
                        </div>
                        <p className="mb-1">Výstava v Blanenském muzeu.</p>
                        <small>Více informací na blansko.skauting.cz</small>
                    </a>
                    <a href="https://www.bambifest.eu" target="_blank" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Bambifest 2021</h5>
                            <small className="text-muted">20. května 2021</small>
                        </div>
                        <p className="mb-1">Rodinný festival pro děti i dospělé</p>
                        <small className="text-muted">Více informací na www.bambifest.eu</small>
                    </a>
                    <a href="http://www.pomahameblansku.cz/" target="_blank" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Pomáháme Blansku</h5>
                            <small className="text-muted">dokud bude potřeba</small>
                        </div>
                        <p className="mb-1"># krizová situace COVID-19</p>
                        <small className="text-muted">Více informací na www.pomahameblansku.cz</small>
                    </a>
                </div>

            </div>

            {/*<Sidebar />*/}
        </div>
    );
}

export default App;
