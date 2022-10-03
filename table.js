const fs = require('node:fs');

let table = "";
let number = prompt("Introduce un número: ");
let docName = prompt("Introduce el nombre del documento:");
let docType = prompt("Intoduce en tipo de documento: ");

function createTable(number){
    for(let multiplo=0; multiplo <=10; multiplo++){
        let result = number * multiplo;
        table += `${number} x ${multiplo} = ${result}\n`
        console.log(`${number} x ${multiplo} = ${result}`);
    }
}

fs.writeFile(`${docName}.${docType}`, table, (err)=> {
    if(err) throw err;
    console.log("El fichero se ha creado correctamente");
});