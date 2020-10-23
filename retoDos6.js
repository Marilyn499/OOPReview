"use strict";
exports.__esModule = true;
var retoDos1_1 = require("./retoDos1");
//TODOS LOS OBJETOS INICIALMENTE
var mobile1 = new retoDos1_1.Mobile("Nokia", "3210", "Nokia", "mini", "black", false, 1, 198);
var mobile2 = new retoDos1_1.Mobile("Iphone", "3", "Apple", "mini", "grey", false, 2, 899);
var mobile3 = new retoDos1_1.Mobile("Samsung", "Galaxy10", "Samsung", "mini", "red", false, 2, 540);
//MODIFICAR NOKIA
mobile1.setis5G(true);
//console.log(mobile1.getis5G());
mobile1.setcameraNumber(4);
//console.log(mobile1.getcameraNumber());
//MOSTRAR TODOS LOS OBJETOS
console.log(mobile1);
console.log(mobile2);
console.log(mobile3);
//CREAR UN ARRAY CON LOS 3 OBJETOS
var arreglo = [mobile1, mobile2, mobile3];
for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i].printAll());
}
