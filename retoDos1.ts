export class Mobile{

    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:string;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    constructor(name:string,model:string,trademark:string,sdSize:string,color:string,is5G:boolean,cameraNumber:number,price:number){
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price  = price;
    }
    getname():string{
        return this.name;
    }
    setname(name:string){
        this.name = name;
    }
    getmodel():string{
        return this.model;
    }
    setmodel(model:string){
        this.model = model;
    }
    gettrademark():string{
        return this.trademark;
    }
    settrademark(trademark:string){
        this.trademark = trademark;
    }
    getsdSize():string{
        return this.sdSize;
    }
    setsdSize(sdSize:string){
        this.sdSize = sdSize;
    }
    getcolor():string{
        return this.color;
    }
    setcolor(color:string){
        this.color = color;
    }
    getis5G():boolean{
        return this.is5G;
    }
    setis5G(is5G:boolean){
        this.is5G = is5G;
    }
    getcameraNumber():number{
        return this.cameraNumber;
    }
    setcameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
    getprice():number{
        return this.price;
    }
    setprice(price:number){
        this.price = price;
    }



public printAll():string{
    return "The characteristics of the mobile" + " " + this.name + " "+ "are:" + "\n" + "Name: " + this.name + "\n" + "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "\n" + "SD Size: " + this.sdSize + "\n" + "Color: " + this.color + "\n" + "Is 5g?: " + this.is5G + "\n" +  "Number of Cameras: " + this.cameraNumber + "\n" + "Price: " + this.price
    }

}
