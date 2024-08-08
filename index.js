//Lista de palabras para randomizar
let words = ["papaya", "mango", "cereza"];

//funcion para obtener una palabra random
function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}