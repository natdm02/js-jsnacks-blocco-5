// 1. Creo un array di zucchine.
const zucchine = [

  { varieta: 'Zucchino nero',
    peso: 150,
    lunghezza: 20
    },
  { varieta: 'Zucchino giallo', 
    peso: 120,
    lunghezza: 18 
    },
  { varieta: 'Zucchino verde',
    peso: 100,
    lunghezza: 15
    },
  { varieta: 'Zucchino romano', 
    peso: 130, 
    lunghezza: 22 
    },
  { varieta: 'Zucchino siciliano', 
    peso: 140, 
    lunghezza: 19
    },
  { varieta: 'Zucchino toscano', 
    peso: 110, 
    lunghezza: 16
    },
  { varieta: 'Zucchino francese', 
    peso: 160, 
    unghezza: 25
    },
  { varieta: 'Zucchino spagnolo', 
    peso: 125, 
    lunghezza: 17
    },
  { varieta: 'Zucchino inglese',
    peso: 180,
    lunghezza: 28 
    },
  { varieta: 'Zucchino americano', 
    peso: 200, 
    lunghezza: 30 
    }
    
];

// 2. Creo la variabile e inizializzo a 0. 
let sum = 0;

//3. Utilizzo il ciclo forEach.
zucchine.forEach((zucchina)=>{
// Calcolo 
  console.log(zucchina.peso)
  let peso = zucchina.peso

   sum += peso
})


// Stampo 
const risultatoElement = document.createElement('p');
risultatoElement.textContent = `Il peso totale delle zucchine è: ${sum} grammi`;


document.body.appendChild(risultatoElement);
