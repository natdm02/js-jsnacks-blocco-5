// array di numeri 
const arrayy = [1,2,3,4,5,6,7,8,9,10];

// Dichiarazione di due numeri  
const firstNumber = 1;
const secondNumber = 10;


const secondArray = compilatore(arrayy, firstNumber, secondNumber);


console.log(secondArray);

function compilatore(array, firstNumber, secondNumber) {

    let secondArray = array.filter(element => {
        if(element>firstNumber && element<secondNumber){
            return true;
        }
        return false;
    })

    return secondArray;
}

const risultatoArray = compilatore(arrayy, firstNumber, secondNumber);


const outputContainer = document.getElementById('output-container');
const risultato = document.createElement('p');
risultato.textContent = `Array compilato: [${risultatoArray.join(', ')}]`;
outputContainer.appendChild(risultato);
