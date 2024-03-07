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

// 1. Creo un array per le zucchine più corte di 15cm. 

const lunghezza15 = zucchine.filter((zucchina)=> zucchina.lunghezza < 15)

console.log(lunghezza15)

// Creo un array per le zucchine più lunghe di 15cm. 

const lunghezzavarie = zucchine.filter ((zucchina) => zucchina.lunghezza >= 15)

console.log(lunghezzavarie)

// 3. Calcolo della somma dei pesi delle zucchine con lunghezza < 15cm. 

let somma=0

lunghezza15.forEach((zucchina)=>{
    somma+= zucchina.peso
})

console.log(somma)


// 4. Calcolo della somma dei pesi delle zucchine con lunghezza >= 15cm. 

let sommavarie = 0

lunghezzavarie.forEach((zucchina)=>{
    sommavarie+= zucchina.peso
})

console.log(sommavarie)


