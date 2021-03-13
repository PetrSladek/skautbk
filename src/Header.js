import logo from "./logo/SKAUT_logo.svg";
import {Unit} from "./Unit";

export function Header({activeHouse, units, troops, houses, onClickHouse}) {

    return <div id="header">
        <div className="container">

            <header>
                <img src={logo} alt="Skaut" width="100"/>
                <h1>Skaut Blansko <small>rozcestník středisek a oddílů</small></h1>
            </header>
        </div>
            <hr />
        <div className="container">
            <div id="units" className="row">
                {Object.keys(units).map((code) =>
                    <Unit
                        key={code}
                        {...units[code]}
                        house={units[code].houses.map((house, inx) =>
                            <a className={activeHouse === house ? 'active' : null} key={inx} href="" onClick={e => onClickHouse(e, house)}>
                                {houses[house].name}
                            </a>
                        )}
                        units={Object.values(troops).filter(troop => troop.parent === code).map((troop, inx) =>
                            <a className={activeHouse === troop.house ? 'active' : null} key={inx} href="" onClick={e => onClickHouse(e, troop.house)}>
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