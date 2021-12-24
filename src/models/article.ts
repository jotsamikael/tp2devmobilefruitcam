
export interface Article{
    name: string;
    info:string;
    pictures:string[];
    id: number;
    price:number;
    catergory:string;
    createdAt:Date;
    quantity:number;
    availability:Availability;

}

export interface Availability{
    available:boolean;
    type:string;
    fee:number;
}