import logo from "./logo/SKAUT_logo.svg";
import {Unit} from "./Unit";
import React, {useState} from 'react';

export function Header({units, troops, houses, onChangeLocation}) {

    const [active, setActive] = useState(null);

    function handleClickHouse(e, house)
    {
        e.preventDefault();
        if (houses[house])
        {
            setActive(house);
            onChangeLocation(houses[house].coords, 18, house);
            // TODO podle velikosti displeje
            document.getElementById('units').scrollIntoView();
        }
    }

    return <div id="header">
        <div className="container">

            <header>
                <img src={logo} alt="Skaut" width="100"/>
                <h1>Skaut Blansko </h1>
                <hr />
            </header>

            <div id="units" className="row">
                {Object.keys(units).map((code) =>
                    <Unit
                        key={code}
                        {...units[code]}
                        house={units[code].houses.map((house, inx) =>
                            <a className={active === house ? 'active' : null} key={inx} href="" onClick={e => handleClickHouse(e, house)}>
                                {houses[house].name}
                            </a>
                        )}
                        units={Object.values(troops).filter(troop => troop.parent === code).map((troop, inx) =>
                            <a className={active === troop.house ? 'active' : null} key={inx} href="" onClick={e => handleClickHouse(e, troop.house)}>
                                {troop.number}{/*. oddíl*/}
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