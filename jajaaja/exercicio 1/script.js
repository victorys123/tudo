
let idade = prompt ("Qual é sua idade?");
let renda = prompt ("qual é sua renda?");
let valor = prompt ("qual é o valor do emprestimo que vc deseja?");

if ((idade>22) && (valor > 1000) && (valor < 15*renda)) {
    alert ("aceito");
   
}
else {
    alert ("não aceito");
}

console.log ("#");
