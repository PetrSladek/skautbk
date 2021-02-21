import './App.scss';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Header} from "./Header";
import {data} from './data';
import {Events} from "./Events";


function HousePopup({name, image, troops, units}) {
    return <Popup minWidth={300}>


        <div className="mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    {image && <img src={image} style={{width: '100%'}} alt="..." />}
                </div>
                <div className="col-md-8">
                    <h5>{name}</h5>
                    <ul>
                        {troops.map((troop, index) => <li key={index}>{troop.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </Popup>;
}

function App() {

    let map = null;
    let refs = {};
    const defaultCoords = [49.3656989, 16.6404402];
    const defaultZoom = 14;

    const handleChangeLocation = (coords, zoom, house) => {
        Object.values(refs).map(ref => ref.closePopup());
        if (!map)
        {
            return;
        }
        map.flyTo(coords, zoom);
        map.on('zoomend', () => {
            refs[house].openPopup();
            map.off('zoomend');
        });
    };
    const handleReset = () => map && map.flyTo(defaultCoords, defaultZoom);
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

                console.log(house.name, ' distance is ', distance);

                if (distance < nearestDistance || nearestDistance === null) {
                    nearestDistance = distance;
                    nearestHouse = house;
                }
            })

            console.log('Nearest house is', nearestHouse.name, ' distance is ', nearestDistance);
            map.flyTo(nearestHouse.coords, 18);
        });
        map.locate();
    }


    return (
        <div id="app">
            <Header
                units={data.units}
                troops={data.troops}
                houses={data.houses}
                onChangeLocation={handleChangeLocation}
            />

            <MapContainer
                id="map"
                whenCreated={createdMap => map = createdMap}
                center={defaultCoords}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                zoomControl={true}
                doubleClickZoom={false}
                dragging={false}
            >

                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url="https://mapserver.mapy.cz/base-m/{z}-{x}-{y}"
                    url="https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}"
                />

                {Object.keys(data.houses).map((key) =>
                    <Marker key={key} position={data.houses[key].coords} ref={ref => refs[key] = ref}>
                        <HousePopup
                            {...data.houses[key]}
                            troops={Object.values(data.troops).filter(troop => troop.house === key)}
                            units={Object.values(data.units).filter(unit => unit.houses.includes(key))}
                        />
                    </Marker>
                )}

                <div className="buttons">
                    <button className="btn btn-light btn-sm" type="button" onClick={handleFindNearby}>
                        Najít nejbližší klubovnu
                    </button>
                    {' '}
                    <button className="btn btn-light btn-sm" type="button" onClick={handleReset}>
                        Vrátit na celkový pohled
                    </button>
                </div>

                <div className="copyright print"
                     title=" Seznam.cz, a.s., 2021 |  OpenStreetMap"
                     style={{position: 'absolute', inset: 'auto auto 3px 5px'}}
                >
                    © <a href="https://o.seznam.cz" target="_blank" rel="noopener">Seznam.cz, a.s.</a>, 2021
                    a <a href="#" data-others="1">další</a>
                </div>
                <a className="copyright print" target="_blank"
                   href={"https://mapy.cz/?x=" + defaultCoords[1] + "&y=" + defaultCoords[0] + "&z=" + defaultZoom}
                   style={{position: 'absolute', inset: 'auto 0px 0px auto'}}
                >
                    <img src="https://api.mapy.cz/img/api/logo.svg" alt="Zobrazit na Mapy.cz"/>
                </a>

            </MapContainer>

            <Events />

        </div>
    );
}

export default App;