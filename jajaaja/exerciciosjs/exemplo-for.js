let i = 1;

while(i<= 10){
    console.log(i);
    i++;
}
console.log("-----------------")

//utilizando for

for(let i = 1; i<=10; i++){
    console.log(i);
}
console.log("-----------------")
//for of e for in

let lista = ["oi","ala", "b", "c"];

for(let item in lista){
    console.log(item);
}
console.log("-----------------")

for(let item of lista){
    console.log(item)
}

