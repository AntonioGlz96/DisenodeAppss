var url = "https://jsonplaceholder.typicode.com/todos"
const axios = require('axios');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let opcionn;

console.log("Bienvenido miembro de la liga NFL, a cual de las siguientes opciones queres acceder?");
console.log("1)LIsta de todos los pendientes(Solo IDs)");
console.log("2)LIsta de todos los pendientes(IDs y Titles)");
console.log("3)LIsta de todos los pendientes sin resolver(ID y title)");
console.log("4)LIsta de todos los pendientes resueltos(ID y Title)");
console.log("5)LIsta de todos los pendientes(ID y userId)");
console.log("6)LIsta de todos los pendientes resueltos(ID y userId)");
console.log("7)LIsta de todos los pendientes sin resolver(ID y userId)");


rl.question('Selecciona una opcion: ', (opcionn) => {
  // Convertir la entrada a un número
  opcionn = parseInt(opcionn);

  switch(opcionn){
    case 1:
        axios.get(url).then(({data}) => {
            for (const key in data){
                console.log("Id: "+data[key].id);
            }
        });
      
    break;


    case 2:
        axios.get(url).then(({data}) => {
            for (const key in data){
                console.log("Id: "+data[key].id + " Title: " + data[key].title);
            }
        });

    break;


    case 3:
        axios.get(url).then(({data}) => {
            for (const key in data){
                if(data[key].completed == false){
                console.log("Id: "+data[key].id + " Title: "  + data[key].title);
            }
        }
        });
      
    break;

    case 4:
        axios.get(url).then(({data}) => {
            for (const key in data){
                if(data[key].completed == true){
                console.log("Id: "+data[key].id + " Title: " + data[key].title);
            }
        }
        });
      
    break;
    case 5:
        axios.get(url).then(({data}) => {
            for (const key in data){
                console.log("Id: "+data[key].id + " userId: " + data[key].userId);
            }
        });
      
    break;
    case 6:
        axios.get(url).then(({data}) => {
            for (const key in data){
                if(data[key].completed == true){
                console.log("Id: "+data[key].id + " userId: " + data[key].userId);
                }
            }
        });
      
    break;
    case 7:
        axios.get(url).then(({data}) => {
            for (const key in data){
                if(data[key].completed == false){
                console.log("Id: "+data[key].id + " UserId: " + data[key].userId);
                }
            }
        });
      
    break;
    
    default:
        console.log("Ingresa un valor correcto");
    break;
    
  }


  rl.close();

});




 