export class Mobile{

    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:string;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

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

}