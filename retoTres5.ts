import {Mobile} from "./retoDos1"
import {MobileLibrary} from "./retoTres1"



let movil1:Mobile = new Mobile("Huawei","3210","Huawei","mini","black",false,1,200);
let movil2:Mobile = new Mobile("Bq","3","Bq","mini","grey",false,2,900);
let movil3:Mobile = new Mobile("Motorola","10","Motorola","mini","red",false,2,500);

let moviles = [movil1,movil2,movil3];
let prueba:MobileLibrary = new MobileLibrary("xxx","zzz",moviles);
prueba.totalPriceCalculation();
