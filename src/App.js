import './App.scss';
import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Header} from "./Header";
import {data} from './data';
import {Events} from "./Events";

const TVAR_1 = "m167.92289,6.27904c91.75956,-5.96775 225.71492,4.87354 295.79273,12.71594s91.57264,50.45412 104.83156,78.89415c13.2599,28.44004 34.70451,136.01698 22.94749,174.80373c-11.75801,38.78496 -0.39839,70.88646 -66.79901,96.30288c-111.46151,42.84897 -302.8584,23.96726 -386.55834,21.60442c-47.39227,-1.22932 -130.78005,11.24296 -134.14705,-56.31242c-2.38341,-50.73794 -18.61561,-215.45747 15.39111,-288.76102c8.65015,-27.35307 60.19315,-38.16913 148.54151,-39.24768z";
const TVAR_2 = "m574.82,331.73835c-17.505,28.08921 -26.899,61.03064 -119.149,61.03064l-314.968,0c-51.056,0 -105.391,-11.39231 -120.095,-44.84453c-14.294,-32.50316 -23.443,-200.81163 -16.266,-274.50141c3.442,-34.6201 26.432,-52.96924 94.875,-59.53577s340.466,-12.76794 400.273,-8.24458s94.584,6.34771 98.085,55.19434c3.501,48.84727 -5.718,242.8121 -22.755,270.90131z";
const TVAR_3 = "m517.663,8.31678c-94.04,-13.7412 -170.643,-4.20873 -257.209,-0.82872c-81.999,3.18834 -189.014,10.93558 -189.014,10.93558c-37.99,5.2924 -69.181,15.08043 -69.44,57.96271c0,35.29415 -1.246,191.61384 19.306,234.62329c11.521,24.07168 27.402,56.24076 65.341,67.58978c37.938,11.35087 81.999,19.32111 212.783,19.13067c119.366,0 262.087,-18.14161 282.017,-56.08104c10.068,-19.13067 14.688,-46.89996 15.569,-99.95238c1.816,-117.10431 -0.104,-221.7747 -79.353,-233.3799z";
const TVAR_4 = "m588.95635,315.54238c-16.51388,38.40539 -34.21078,79.71464 -133.76448,79.71464l-365.00917,0c-85.93957,0 -91.68172,-46.86155 -85.34756,-94.61926c6.33218,-47.75652 10.00281,-212.99055 8.8188,-247.27703c-1.18302,-34.28649 37.88042,-49.72773 81.32311,-49.72773c129.38424,0 218.99444,0 295.93829,11.78718c28.64652,4.47844 150.09157,17.83541 170.27509,53.98482c45.69212,82.29426 34.869,228.9403 27.76593,246.13738z";

function HousePopup({name, image, troops, units}) {
    return <Popup minWidth={666}>
        <div className="house-popup">
            <div className="row">
                <div className="col-md-6">
                {image &&
                    <svg className="img-fluid" viewBox="0 0 600 400">
                        <clipPath id={"clip-path"}>
                            <path d={TVAR_3}/>
                        </clipPath>

                        <image
                            clipPath={"url(#clip-path)"}
                            xlinkHref={image}
                            src={image}
                            alt=""
                            width="600"
                            height="400"
                        />
                    </svg>
                }
                </div>
                <div className="col-md-6">
                    <h3>{name}</h3>
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