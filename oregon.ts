(function(){


    //random numnber generator
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;


    }

   

    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;
        isAlive: boolean;
        eat(){
            if (this.food >=20){ this.food -=20}
            else { this.isHealthy = false};
            return this.isHealthy;
            };
        hunt(){
             if (Math.random() > .5) { return this.food +=100}
                { return this.food};
            }
        surviveDysentary(){
            if (this.isHealthy==true){this.isAlive=true}
            else if(Math.random() > .5)  {this.isAlive=false}
            return (this.isAlive ? this.name +" is alive!" : this.name+" got dysentary and died!");
            }
    constructor (name: string, food:number = getRandom(0,100), isHealthy:boolean =true) {
        this.food= food;
        this.name= name;
        this.isHealthy = isHealthy;
        this.isAlive = true;
      
        }
    

    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler) {
            if (this.passengerArray.length < this.capacity){
                this.passengerArray.push(traveler);
                return "added"
            }
            {return "sorry"}    

            }
    

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(){
            for (let i=0; i<this.passengerArray.length; i++) 
            {
            if (!this.passengerArray[i].isHealthy) {
                return true }
            }  return false;
         }

        //Return the total amount of food among all passengers of the wagon.
        getFood()
            {
            let totalFood = 0;
            for (let i=0; i<this.passengerArray.length; i++) {
              totalFood +=this.passengerArray[i].food;
             }return totalFood
            }

        constructor (capacity: number, passengerArray=[]){
            this.capacity = capacity;
            this.passengerArray =[];

        }
    }



    let Traveler1 = new Traveler('Eric');
    let Traveler2 = new Traveler('David Michael Greg');
    let Traveler3 = new Traveler('Curtis');
    let Traveler4 = new Traveler('Kalea');
    let Traveler5 = new Traveler('Jason');

    let Wagon1 =new Wagon(4);

    
    console.log(Traveler1.name +" is healthy after eating? " +Traveler1.eat())
    
    console.log(Traveler3.name +" is healthy after eating? " +Traveler3.eat())
  
    console.log(Traveler5.name +" is healthy after eating? " +Traveler5.eat())

    
    console.log(Traveler2.name +" hunted and now has "+Traveler2.hunt()+" food");
    
    console.log(Traveler4.name +" hunted and now has "+Traveler4.hunt()+" food");

    let wagonPassengers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5]

    wagonPassengers.forEach(function(passenger, index){
        if (Math.random() > .5) {return Wagon1.addPassenger(passenger)}
         console.log(passenger.name+" entered the lottery and was "+Wagon1.addPassenger(passenger));
    })
   

    Wagon1.isQuarantined();
    console.log("The Wagon is quarantined? " +Wagon1.isQuarantined())

    Wagon1.getFood();
    console.log("total food for wagon is: " +Wagon1.getFood())


    
    console.log(Traveler1.surviveDysentary());
    console.log(Traveler2.surviveDysentary());
    console.log(Traveler3.surviveDysentary());
    console.log(Traveler4.surviveDysentary());
    console.log(Traveler5.surviveDysentary());
    

    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects 
    *
    */

})();

