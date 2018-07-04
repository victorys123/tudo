let nota = prompt("Qual foi a nota do aluno?");

nota = Number(nota);

if (isNaN (nota)) {
    alert ("erro valor inválido");
}
if (nota < 5) {
alert("reprovado");
}
else if (nota >=7){
    alert("aprovado");
}
else {
    alert("exame");
}