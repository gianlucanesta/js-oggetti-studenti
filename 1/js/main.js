// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

const studente = {
    nome: 'Gianluca', 
    cognome: 'Nesta',
    eta: 30,
    citta: 'Roma'
};

// console.log(studente);


for (let value in studente) {
    console.log(value)
}