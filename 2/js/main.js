// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

const studenti = 
[

    {
        nome: 'Gianluca', 
        cognome: 'Nesta',
        eta: 30,
        citta: 'Roma'
    },
    {
        nome: 'Alessandro', 
        cognome: 'Rossi',
        eta: 24,
        citta: 'Milano'
    },
    {
        nome: 'Andrea', 
        cognome: 'Verdi',
        eta: 34,
        citta: 'Torino'
    }
]

 
for( let i = 0; i < studenti.length; i++ ) {
    for(let value in studenti[i]) {    
        if (value !== 'eta' && value !== 'citta') {
        console.log(studenti[i][value]);
        }
    }
};