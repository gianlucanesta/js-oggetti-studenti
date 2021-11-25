// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


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
// console.log(newStudent)

let newFirstName = prompt ('Inserisci il nome');
let newLastName = prompt ('Inserisci il cognome');
let newAge = parseInt (prompt ('Inserisci l\' età'));
let newCity = prompt ('Inserisci la città');



const newStudent  =  {
    nome: newFirstName, 
    cognome: newLastName,
    eta: newAge,
    citta: newCity
};


console.log(newStudent)

studenti.push(newStudent);

console.log (studenti)