let nota = prompt("Qual foi a Nota do Aluno ?");

nota = Number (nota);

if (isNaN(nota)){
    alert ("Erro: Valor invalido")
}
else if (nota < 5){
    alert ("Reprovado");
}
else if ( nota > 7){
    alert ("Aprovado");
}
else{
    alert("Exame");
}