import './App.scss';
import React, {useState, useEffect} from 'react';
import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import {Header} from "./Header";
import {data} from './data';
import {Banners} from "./Banners";
import {HousePopup} from "./HousePopup";

let refs = {};
let map = null;

let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let vw = Math.max(document.documentElement.clientWidth || 0, window.clientWidth || 0);

function App() {

    // const defaultCoords = [49.3656989, 16.6404402];
    const defaultCoords = [49.3556756, 16.6454032];
    const defaultZoom = 14;

    const [activeHouse, setActiveHouse] = useState(null);

    const handleClickHouse = (e, house) =>
    {
        e.preventDefault();
        if (data.houses[house])
        {
            setActiveHouse(house);

            const coords = data.houses[house].coords;
            const zoom = 18;

            Object.values(refs).map(ref => ref.closePopup());
            if (!map)
            {
                return;
            }
            map.flyTo(coords, zoom);
            map.on('zoomend', () => {

                console.log(refs, house);

                // map.panBy([0,-100]);
                refs[house].openPopup();
                map.off('zoomend');
            });

            // doscrolujeme na přehled středisek
            // TODO na mobilu to asi nehceme

            if (vw < 576)
            {
                document.getElementById('map').scrollIntoView({behavior: 'smooth'});
            }
        }
    };

    const handleReset = () => map && map.flyTo(defaultCoords, defaultZoom) && setActiveHouse(null);
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

    const handleOnLoad = () => {
        vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        vw = Math.max(document.documentElement.clientWidth || 0, window.clientWidth || 0);

        const unitsHeight = document.getElementById('units').clientHeight;
        const headerHeight = document.getElementById('header').clientHeight;

        console.log("vh", vh, 'vw', vw,"header", headerHeight, "vh-header", vh-headerHeight,  "units", unitsHeight, "vh-units", vh-unitsHeight);


        // // chci aby mapa měla alespon 568px
        if (vw >= 576)
        {
            document.getElementById('map').style.height = (vh - headerHeight) + "px";
        }


        // vzhozi veliksot je 80% vh
    };

    useEffect(() => {
        window.addEventListener('load', handleOnLoad);
        window.addEventListener('resize', handleOnLoad);
        // returned function will be called on component unmount
        return () => {
            window.removeEventListener('load', handleOnLoad);
            window.removeEventListener('resize', handleOnLoad);
        }
    }, [])

    return (
        <div id="app">
            <Header
                activeHouse={activeHouse}
                units={data.units}
                troops={data.troops}
                houses={data.houses}
                onClickHouse={handleClickHouse}
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
                    <Marker
                        key={key}
                        position={data.houses[key].coords}
                        ref={ref => refs[key] = ref}
                        eventHandlers={{
                            click: (e) => {
                                console.log('marker clicked', e);
                                handleClickHouse(e.originalEvent, key);
                            },
                        }}
                    >
                        <HousePopup
                            {...data.houses[key]}
                            vw={vw}
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

            <Banners banners={data.banners} />

        </div>
    );
}

export default App;