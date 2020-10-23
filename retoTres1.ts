import {Mobile} from "./retoDos1"


export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles: Mobile[];
    private totalPrice:number;

    constructor(name:string,location:string,mobiles: Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }
    getname():string{
        return this.name;
    }
    setname(name:string){
        this.name = name;
    }
    getlocation():string{
        return this.location;
    }
    setlocation(location:string){
        this.location = location;
    }
    getmobiles():Mobile[]{
        return this.mobiles;
    }
    setmobiles(mobiles:Mobile[]){
        this.mobiles = mobiles;
    }
    public totalPriceCalculation(){
        let resultado:number = 0;
        for(let i=0; i<this.mobiles.length;i++){
            resultado += this.mobiles[i].getprice()
        }
        console.log(resultado)
    }
}


let mobile1:Mobile = new Mobile("Nokia","3210","Nokia","mini","black",false,1,198);
let mobile2:Mobile = new Mobile("Iphone","3","Apple","mini","grey",false,2,899);
let mobile3:Mobile = new Mobile("Samsung","Galaxy10","Samsung","mini","red",false,2,540);



let prueba:MobileLibrary = new MobileLibrary("xxx","zzz",[mobile1,mobile2,mobile3]);
//prueba.totalPriceCalculation();