import urlPalava from "./klubovny/palava.jpg";
import urlRuzova3 from "./klubovny/ruzova3.jpg";
import urlRuzova5 from "./klubovny/ruzova5.jpg";
import urlKomenskeho13 from "./klubovny/komenskeho.jpg";

export const data = {
    houses: { // Klubovny
        'palava': {
            name: 'Palava',
            longName: 'Palava (Blansko ev. č. 1883)',
            coords: [49.3682283, 16.6583092],
            image: urlPalava,
        },
        'ruzova3': {
            name: 'Růžová 3',
            coords: [49.3646756, 16.6454031],
            image: urlRuzova3,
        },
        'ruzova5': {
            name: 'Růžová 5',
            coords: [49.3645531, 16.6454075],
            image: urlRuzova5,
        },
        'ruzova7': {
            name: 'Růžová 7',
            coords: [49.3644675, 16.6454942],
            image: urlRuzova5, // TODO
        },
        'komenskeho13': {
            name: 'Komenského 13',
            coords: [49.3597722, 16.6388450],
            image: urlKomenskeho13,
        },
        'komenskeho15': {
            name: 'Katolický dům',
            longName: 'Komenského 15 (Katolický dům)',
            coords: [49.3596828, 16.6386614],
            image: urlKomenskeho13, // TODO
        },
        'klepacov': {
            name: 'Klepačov',
            longName: 'Dlouhá 167, Klepačov',
            coords: [49.3426133, 16.6612411],
            image: null, // TODO
        },
    },
    units: {
        '621.01': {
            // name: 'Srdce na dlani',
            name: <>Srdce <small>na dlani</small></>,
            web: null,
            houses: ['ruzova3', 'palava', 'komenskeho15', 'klepacov'],
            color: '#cd2a00',
        },
        '621.07': {
            name: 'Světla',
            web: null,
            houses: ['ruzova5', 'ruzova7'],
            color: '#fcaf17',

        },
        '621.09': {
            name: 'Fénix',
            web: null,
            houses: ['palava'],
            color: '#3b71b1',
        },
        '621.10': {
            name: 'Labirynt',
            web: null,
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
            house: 'komenskeho15',
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
            web: null,
        },
        '15oddil': {
            parent: '621.07',
            number: 15,
            name: '15. oddíl Kasiopeja (ČH)',
            house: 'cernahora',
            web: null,
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