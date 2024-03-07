// 1. Definisco una variabile contenente una stringa. 
const parola = 'ciao'

// 2. Dichiaro una funzione Reverse. 

function Reverse(word){
  
    let newWord = word.split('').reverse().join('')
    return newWord
}

// 3. Stampo. 
console.log(Reverse(parola))


