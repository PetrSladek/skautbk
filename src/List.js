import logo from "./logo/SKAUT_logo.svg";
import {Unit} from "./Unit";
import React, {useState} from 'react';

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
                        key={code}
                        title={units[code].name}
                        color={units[code].color}
                        image={units[code].image}
                        house={units[code].houses.map((house, inx) =>
                            <a className={active === house && 'active'} key={inx} href="" onClick={e => handleClickHouse(e, house)}>
                                {houses[house].name}
                            </a>
                        )}
                        units={Object.values(troops).filter(troop => troop.parent === code).map((troop, inx) =>
                            <a className={active === troop.house && 'active'} key={inx} href="" onClick={e => handleClickHouse(e, troop.house)}>
                                {troop.number}
                            </a>
                        )}
                    />
                )}
                {/*<div className="col-1">*/}
                {/*    <strong style={{fontSize: "8em", opacity: 0.05}}>❯</strong>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>;
}