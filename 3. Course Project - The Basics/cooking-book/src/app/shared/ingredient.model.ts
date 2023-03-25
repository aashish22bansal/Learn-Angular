export class Ingredient{
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }

    // We can also create the constructor as:
    // constructor(public name: string, public amount: number){}
}