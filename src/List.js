import logo from "./logo/SKAUT_logo.svg";
import {Unit} from "./Unit";
import {useState} from 'react';

export function List({units, troops, houses, onChangeLocation}) {

    const [active, setActive] = useState(null);

    function handleClickHouse(e, house)
    {
        e.preventDefault();
        if (houses[house])
        {
            setActive(house);
            onChangeLocation(houses[house].coords, 18);
        }
    }

    return <div id="header">
        <div className="container">

            <header>
                <img src={logo} alt="Skaut" width="100"/>
                <h1>Skaut Blansko </h1>
            </header>

            <div className="row">

                {Object.keys(units).map((code) =>
                    <Unit
                        // title={<>Srdce <small>na dlani</small></>}
                        title={units[code].name}
                        image={units[code].image}
                        house={units[code].houses.map(house =>
                            active === house
                                ?
                                <span style={{color: 'black'}}>{houses[house].name}</span>
                                :
                                <a href="" onClick={e => handleClickHouse(e, house)}>
                                    {houses[house].name}
                                </a>
                        )}
                        units={Object.values(troops).filter(troop => troop.parent === code).map(troop =>
                            active === troop.house
                                ?
                                <span style={{color: 'black'}}>{troop.number}</span>
                                :
                                <a href="" onClick={e => handleClickHouse(e, troop.house)}>
                                    {troop.number}
                                </a>
                        )}
                    >
                    </Unit>
                )}
                {/*<div className="col-1">*/}
                {/*    <strong style={{fontSize: "8em", opacity: 0.05}}>❯</strong>*/}
                {/*</div>*/}
            </div>
            <div className="row">
                <div className="offset-lg-4 col-lg-3  offset-sm-3 col-sm-6">
                    <a className="btn btn-block btn-light btn-down" href="#map">↓ Najít nejbližší klubovnu ↓</a>
                </div>
            </div>
        </div>
    </div>;
}