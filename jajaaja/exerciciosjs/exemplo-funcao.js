// function sorteio(minimo=0, maximo=10){
//     let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
//     return aleatorio;
// }

//arrow function
const sorteio = (minimo=0, maximo=10) => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

let lista = ["joao", "jose", "maria", "ana"]

let i = 0;
while(i<10){
console.log(lista[sorteio(0,lista.length-1)])
}







// let numero1 = sorteio();
// let numero2 = sorteio(0,50);
// let numero3 = Math.floor(Math.random() *22) + 15;
// console.log(numero1, numero2, numero3);