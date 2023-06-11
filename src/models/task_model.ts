
export default class TaskModel { 

    id: Number;
    description: String;
    unit: String;
    quantity: Number;
    rate: Number;
    amount: Number;

    constructor(id:Number,description:String,unit:String,quantity:Number,rate:Number,amount:Number,) { 
        this.id = id;
        this.description = description;
        this.unit = unit;
        this.quantity = quantity;
        this.rate = rate;
        this.amount = amount;

    }

}