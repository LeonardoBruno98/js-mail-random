var dato = prompt ( "Fornisci la tua Email" );
var mail = ["java@gmail.com" , "java1@gmail.com" , "java2@gmail.com"  , "java3@gmail.com" , "java4@gmail.com" , "java5@gmail.com"];

for (var i = 0; i < mail.length; i++) {
  if ( dato == mail[i] ) {
  alert("Benvenuto!");
}

  else if (dato != mail[i]) {
 alert("Utente non esistente.");
}

}
