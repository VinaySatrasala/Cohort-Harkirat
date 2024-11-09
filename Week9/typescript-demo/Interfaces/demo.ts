interface Person{
    name : string,
    age : number,

    greet(phrase : string):void;
}

class Student implements Person{
    name: string;
    age: number;

    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }

}