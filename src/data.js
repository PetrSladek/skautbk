import urlPalava from "./klubovny/palava.jpg";
import urlRuzova3 from "./klubovny/ruzova3.jpg";
import urlRuzova5 from "./klubovny/ruzova5.jpg";
import urlRuzova7 from "./klubovny/ruzova7.jpg";
import urlKomenskeho13 from "./klubovny/komenskeho.jpg";
import urlStaraFara from "./klubovny/starafara.jpg";
import urlKaplankaSloup from "./klubovny/kaplankasloup.jpg";
import urlCentrumBeruska from "./klubovny/centrumberuska.jpg";
import urlKlepacov from "./klubovny/klepacov.jpg";

export const data = {
    houses: { // Klubovny
        'palava': {
            name: 'Palava',
            longName: 'Klubovna na Palavě',
            address: 'ev. č. 1883, 678 01 Blansko',
            coords: [49.3682283, 16.6583092],
            image: urlPalava,
        },
        'ruzova3': {
            name: 'Růžová 3',
            longName: 'Klubovna na Růžové 3',
            address: 'Růžová 3, 678 01 Blansko',
            coords: [49.3646756, 16.6454031],
            image: urlRuzova3,
        },
        'ruzova5': {
            name: 'Růžová 5',
            longName: 'Klubovna na Růžové 5',
            address: 'Růžová 5, 678 01 Blansko',
            coords: [49.3645531, 16.6454075],
            image: urlRuzova5,
        },
        'ruzova7': {
            name: 'Růžová 7',
            longName: 'Klubovna na Růžové 7',
            address: 'Růžová 7, 678 01 Blansko',
            coords: [49.3644675, 16.6454942],
            image: urlRuzova7,
        },
        'komenskeho13': {
            name: 'Komenského 13',
            longName: 'Klubovna na Komenského 13',
            address: 'Komenského 13, 678 01 Blansko',
            coords: [49.3597722, 16.6388450],
            image: urlKomenskeho13,
        },
        'starafara': {
            name: 'Stará fara',
            longName: 'Klubovna na Staré faře',
            address: 'Komenského 48/14, 678 01 Blansko',
            coords: [49.3599281, 16.6382375],
            image: urlStaraFara,
        },
        'klepacov': {
            name: 'Klepačov',
            longName: 'Klubovna na Klepačově',
            address: 'Dlouhá 167, Klepačov',
            coords: [49.3426133, 16.6612411],
            image: urlKlepacov,
        },
        'sloup': {
            name: 'Sloup',
            longName: 'Klubovna Kaplanka ve Sloupě',
            address: 'Kaplanka, Sloup 4, 679 13 Sloup',
            coords: [49.4151156, 16.7408200],
            image: urlKaplankaSloup,
        },
        'cernahora': {
            name: 'Černá Hora',
            longName: 'Klubovna v Černé Hoře',
            address: 'Centrum pro rodinu Veselá beruška, z.s., Budovatelská 282, 67921 Černá Hora',
            coords: [49.4125175, 16.5826606],
            image: urlCentrumBeruska,
        }
    },
    units: {
        '621.01': {
            // name: 'Srdce na dlani',
            name: <>Srdce <small>na dlani</small></>,
            web: 'http://srdcenadlani.skauting.cz/',
            houses: ['ruzova3', 'palava', 'starafara', 'klepacov'],
            color: '#cd2a00',
        },
        '621.07': {
            name: 'Světla',
            web: 'http://skautbk.cz/',
            houses: ['ruzova5', 'ruzova7', 'sloup', 'cernahora'],
            color: '#fcaf17',
        },
        // '621.08': {
        //     name: 'Ad Fontes',
        //     web: null,
        //     houses: [],
        //     color: '#00d7be',
        // },
        '621.09': {
            name: 'Fénix',
            web: 'http://3blansko.skauting.cz/',
            houses: ['palava'],
            color: '#3b71b1',
        },
        '621.10': {
            name: 'Labyrint',
            web: 'http://labyrint.skautbk.cz',
            houses: ['komenskeho13'],
            color: '#416426',
        },
    },
    troops: { // Oddíly
        '1oddil': {
            parent: '621.09',
            number: 1,
            name: '1. oddil KD Kondor',
            house: 'palava',
            web: null,
        },
        '2oddil': {
            parent: '621.01',
            number: 2,
            name: '2. oddíl',
            house: 'palava',
            web: null,
        },
        '3oddil': {
            parent: '621.09',
            number: 3,
            name: '3. oddíl Kondor',
            house: 'palava',
            web: null,
        },
        '4oddil': {
            parent: '621.01',
            number: 4,
            name: '4. oddíl',
            house: 'ruzova3',
            web: null,
        },
        '5oddil': {
            parent: '621.01',
            number: 5,
            name: '5. oddíl',
            house: 'palava',
            web: null,
        },
        '6oddil': {
            parent: '621.07',
            number: 6,
            name: '6. oddíl KD Murlok',
            house: 'ruzova7',
            web: null,
        },
        '7oddil': {
            parent: '621.09',
            number: 7,
            name: '7. oddíl Opicky',
            house: 'palava',
            web: null,
        },
        '8oddil': {
            parent: '621.01',
            number: 8,
            name: '8. oddíl Lovci',
            house: 'klepacov',
            web: null,
        },
        '9oddil': {
            parent: '621.01',
            number: 9,
            name: '9. oddíl Cesta',
            house: 'starafara',
            web: null,
        },
        '10oddil': {
            parent: '621.10',
            number: 10,
            name: '10. oddíl Pramen',
            house: 'komenskeho13',
            web: null,
        },
        '11oddil': {
            parent: '621.07',
            number: 11,
            name: '11. oddíl Svornost',
            house: 'ruzova7',
            web: null,
        },
        '12oddil': {
            parent: '621.07',
            number: 12,
            name: '12. oddíl Ranní hvězda',
            house: 'ruzova5',
            web: null,
        },
        '13oddil': {
            parent: '621.10',
            number: 13,
            name: '13. oddíl Slunovrat',
            house: 'komenskeho13',
            web: null,
        },
        '14oddil': {
            parent: '621.07',
            number: 14,
            name: '14. oddíl Úsvit (Sloup)',
            house: 'sloup',
            web: 'https://www.mestyssloup.cz/udalosti/spolky-1/14-skautsky-oddil-usvit/',
        },
        '15oddil': {
            parent: '621.07',
            number: 15,
            name: '15. oddíl Kasiopeja (ČH)',
            house: 'cernahora',
            web: 'https://cernahora.skauting.cz/',
        },
        '16oddil': {
            parent: '621.07',
            number: 16,
            name: '16. oddíl Plamen života',
            house: 'ruzova5',
            web: null,
        },
        '20oddil': {
            parent: '621.10',
            number: 20,
            name: '20. oddíl KD Portas',
            house: 'komenskeho13',
            web: null,
        },

    }
}