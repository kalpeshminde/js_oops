
    //    class decleration
// class car {
//     constructor(noofcar,model,enginename){
//         this.noofcar = noofcar;
//         this.model = model;
//         this.enginename = enginename;
//     }
//     getnameofcar(){
//         return `this namw of car is ${this.noofcar}`;

//     }
// }
// let aulto = new car("maruti","aulto","bs6");
// let aulto1 = new car("audi","a8","bs6");

// console.log(aulto1.getnameofcar());


// class expression

// class Pwskills {
//     name = "pune center";
// }
// const center = new Pwskills();
// console.log(center.name);



// class ATM {
//    get getcounter () {
//     return this.#counter;

//    }
//    set setcounter (){
//     console.log(amount);

//     if (amount < 100){
//         console.log("error");
//     } else {
//         this.#counter += amount;
//         }
//    } 
//    = 100;
//     diopsitemony(amount){
//          this.balance +=amount;
//     }
//     getmoney(){
//         console.log(this.balance);
//     }
// }
// const icic = new ATM();
// icic.setcount(1000);
// icic.getcounter;()


// class car{
//     static count = 0;
//     static increment(){
//         return ++this.count;
    
//     }
// }
// console.log(car.increment());
// console.log(car.increment());
// console.log(car.increment());

 



// class vahical{
//     static while  = 4;
//     static move();{}
//     static getwheel(){
//         return`the total number of whwwls are ${this.wheel}`
//     }
        
//     }



    //  23/9/2024



// class myDefine{
//     static #getDate = new Date();

//     static getcurrentTime(){
//         return this.#getDate.toLocaleString();
//     }
      
//     }

// console.log(myDefine.getcurrentTime());

   

// class vahical{
//     static counter = 0;
//     constructor(){
//         ++vahical.counter;
//     }
// }
// let alto = new vahical();
// let alto1 = new vahical();
// let alto2 = new vahical();
// console.log(vahical.counter);


// class vehicle {
//     static counter = 0;
//     static getWaik({

//     })
// }


// inheritance

// comment to check
class monster{
    constructor(name){
        this.name = name;
    }
    eat(){
        return `${this.name} is eating.`;
    }
    breath(){
        return `${this.name} is breath;`
    }
     
    class SwimMonster {
        constructor(name) {
            super(name);
            
        }
    }
}
cont bulbasor = new Swimmonster("bulbasor");
console.log(bulbasor.eat());