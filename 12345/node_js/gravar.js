const fs = require('fs');
// let texto = '
Estou gravando um arquivo';
let texto = process.argv[2];

fs.writeFile('teste.txt', texto,(error) => {
    if(error){
        console.log('Houve um erro ao gravar o arquivo');
    }else{
        console.log('Gravei o arquivo');
    }
});
console.log('Já mandei gravar');