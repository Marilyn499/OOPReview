import {Mobile} from "./retoDos1"

//TODOS LOS OBJETOS INICIALMENTE

let mobile1:Mobile = new Mobile("Nokia","3210","Nokia","mini","black",false,1,198);
let mobile2:Mobile = new Mobile("Iphone","3","Apple","mini","grey",false,2,899);
let mobile3:Mobile = new Mobile("Samsung","Galaxy10","Samsung","mini","red",false,2,540);

//MODIFICAR NOKIA
mobile1.setis5G(true);
//console.log(mobile1.getis5G());
mobile1.setcameraNumber(4);
//console.log(mobile1.getcameraNumber());

//MOSTRAR TODOS LOS OBJETOS
console.log(mobile1);
console.log(mobile2);
console.log(mobile3);


