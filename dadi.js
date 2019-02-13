alert("gioco dei dadi");
var giocatore1=prompt("Inserisci il nome del giocatore 1");
var giocatore2=prompt("Inserisci il nome del giocatore 2");
var facce=prompt("numero di facce");

var primo = Math.ceil(Math.random() * facce);
var secondo = Math.ceil(Math.random() * facce);

alert("Il risultato di " + giocatore1 + " è " + primo);
alert("Il risultato di " + giocatore2 + " è " + secondo);

if (primo>secondo) {
  alert("Il vincitore è " + giocatore1 );
} else if (secondo>primo) {
  alert("Il vincitore è " + giocatore2 );
} else {
  alert("Purtroppo c'è stato un pareggio!");
}
