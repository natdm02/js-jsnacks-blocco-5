// 1. Definisco una variabile contenente una stringa. 
const parola = 'ciao'

// 2. Dichiaro una funzione Reverse. 

function Reverse(word){
  
    let newWord = word.split('').reverse().join('')
    return newWord
}

// 3. Stampo. 
console.log(Reverse(parola))



const outputContainer = document.getElementById('output-container');
const risultato = document.createElement('p');
risultato.textContent = `Stringa invertita: ${Reverse(parola)}`;
outputContainer.appendChild(risultato);