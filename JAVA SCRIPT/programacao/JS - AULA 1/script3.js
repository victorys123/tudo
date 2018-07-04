let idade = prompt("Qual Sua idade parsa ?");
let grana = prompt("Quanto de Grana você quer ?");
let valor_mensal = prompt("Quanto você recebe por mês Parsa ?");

    if (idade < 22 || grana < 1000 || valor_mensal * 15 > grana  ){
        alert ("Nas Condições apresentadas você não pode requerer um emprestimo");
    }
    else{
        alert ("Emprestimo Aprovado")
    }

