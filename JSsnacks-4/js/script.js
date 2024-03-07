const primo = [1, 2, 3];
const secondo = ['A', 'B', 'C'];


/**
 * @param {array} first_array 
 * @param {array} second_array 
 * @returns {array} 
 */


function fusion(first_array, second_array) {

// 2. Verifico se gli array hanno la stessa lunghezza. 

    if (first_array.length !== second_array.length) {
        console.error('Gli array devono avere lo stesso numero di elementi.');
        return [];
    }

    const third_array = [];

    first_array.forEach((element, i) => {

// 3. Aggiungo l'elemento dall'array1/2 

        third_array.push(element);
        third_array.push(second_array[i]);
    });

    return third_array;
}

// Stampo 
const array_fuso = fusion(primo, secondo);
console.log(array_fuso);