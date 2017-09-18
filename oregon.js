(function () {
    //random numnber generator
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(name, food, isHealthy) {
            if (food === void 0) { food = getRandom(0, 100); }
            if (isHealthy === void 0) { isHealthy = true; }
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
            this.isAlive = true;
        }
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food -= 20;
            }
            else {
                this.isHealthy = false;
            }
            ;
            return this.isHealthy;
        };
        ;
        Traveler.prototype.hunt = function () {
            if (Math.random() > .5) {
                return this.food += 100;
            }
            {
                return this.food;
            }
            ;
        };
        Traveler.prototype.surviveDysentary = function () {
            if (this.isHealthy == true) {
                this.isAlive = true;
            }
            else if (Math.random() > .5) {
                this.isAlive = false;
            }
            return (this.isAlive ? this.name + " is alive!" : this.name + " got dysentary and died!");
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            if (passengerArray === void 0) { passengerArray = []; }
            this.capacity = capacity;
            this.passengerArray = [];
        }
        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            {
                return "sorry";
            }
        };
        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (!this.passengerArray[i].isHealthy) {
                    return true;
                }
            }
            return false;
        };
        //Return the total amount of food among all passengers of the wagon.
        Wagon.prototype.getFood = function () {
            var totalFood = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                totalFood += this.passengerArray[i].food;
            }
            return totalFood;
        };
        return Wagon;
    }());
    var Traveler1 = new Traveler('Eric');
    var Traveler2 = new Traveler('David Michael Greg');
    var Traveler3 = new Traveler('Curtis');
    var Traveler4 = new Traveler('Kalea');
    var Traveler5 = new Traveler('Jason');
    var Wagon1 = new Wagon(4);
    console.log(Traveler1.name + " is healthy after eating? " + Traveler1.eat());
    console.log(Traveler3.name + " is healthy after eating? " + Traveler3.eat());
    console.log(Traveler5.name + " is healthy after eating? " + Traveler5.eat());
    console.log(Traveler2.name + " hunted and now has " + Traveler2.hunt() + " food");
    console.log(Traveler4.name + " hunted and now has " + Traveler4.hunt() + " food");
    var wagonPassengers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5];
    wagonPassengers.forEach(function (passenger, index) {
        if (Math.random() > .5) {
            return Wagon1.addPassenger(passenger);
        }
        console.log(passenger.name + " entered the lottery and was " + Wagon1.addPassenger(passenger));
    });
    Wagon1.isQuarantined();
    console.log("The Wagon is quarantined? " + Wagon1.isQuarantined());
    Wagon1.getFood();
    console.log("total food for wagon is: " + Wagon1.getFood());
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
