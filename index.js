// trayendo cosas del html
const wordInput = document.getElementById('wordInput');
const wordButton = document.getElementById('scrambleButton');
const wordDisplay = document.getElementById('resetButton');
const wordScramble = document.getElementById('randomWord');

// Lista de palabras para randomizar
let characters = ["papaya", "mango", "cereza"];

// Función para mezclar una palabra
function shuffleWord(word) {
    let array = word.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

// boton para randomizar palabra
wordButton.addEventListener('click', () => {
    // selecciona una palabra del arreglo y le pongo un indez random
    const randomIndex = Math.floor(Math.random() * 3)
    const selectedWord = characters[characters.length - 1 - randomIndex]

    // mezclar las letras de la palabra seleccionada
    const shuffledWord = shuffleWord(selectedWord)
    console.log(selectedWord)

    // Mostrar la palabra mezclada
    wordScramble.textContent = `Palabra mezclada: ${shuffledWord}`
})

    