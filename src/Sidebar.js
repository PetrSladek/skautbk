import logo from "./logo/SKAUT_logo.svg";
import {TVAR_1, Unit} from "./Unit";
import ruzova3 from "./klubovny/ruzova3.jpg";

export function Sidebar() {
    return <div id="sidebar">
        <header>
            <img src={logo} alt="Skaut" width="100"/>
            <h1>Skaut v Blansku</h1>
        </header>

        <Unit
            inx={0}
            title="Srdce na dlani"
            image={ruzova3}
            tvar={TVAR_1}
            house={['Růžová 3', 'Katolický dům', 'Klepačov', 'Adamov']}
            units={[2,4,5,8,9]}
        >
            <li>2. oddíl</li>
            <li>4. oddíl</li>
            <li>5. oddíl</li>
            <li>8. oddíl Lovci</li>
            <li>9. oddíl Cesta</li>
        </Unit>

        <div className="col-sm">
            <h3>Klubovny</h3>
            <ul>
                <li>Palava</li>
                <li>Katolický dům</li>
                <li>Klepačov</li>
            </ul>
        </div>
    </div>;
}