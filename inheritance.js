class Parent{
    constructor(){
        this.fatherName = "Schweznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super(); 
        this.name = name; 
    }
    getFatherName(){
        return this.name + " "+this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom"); 
console.log(baby.getFatherName()); 
console.log(baby2.getFatherName()); 