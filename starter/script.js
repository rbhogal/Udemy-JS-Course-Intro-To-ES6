// Lecture: Let and Const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6

// Const = values we don't want to change. They're immutable
// Let = values we want to change later on
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLiscense5(passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1999;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLiscense5(true);

//ES6
function driversLiscense6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1999;

    if (passedTest) {
        firstName = 'John';

    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');


}

driversLiscense6(true);






var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/



/**********************************
 *** Lecture: Blocks and IIFEs ****
 *********************************/
/*
 // ES6
 {
     const a = 1;
     let b = 2;
     var c = 3;
 }

//console.log(a + b);
console.log(c);

 // ES5
(function() {
    var c = 3;
})();

//console.log(c);


let firstName;


console.log(firstName);
console.log(lastName);



{
    firstName = 'Pete';
   
}
*/

////////////////////////////
//// Lecture: Strings //////
////////////////////////////

/*
let firstName = 'John';
let lastName = 'Smith';
const YEAR_OF_BIRTH = 1990;
function calcAge(year) {
    return 2016 - year;
}

// ES5 
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + YEAR_OF_BIRTH + '. Today, he is ' + calcAge(YEAR_OF_BIRTH) + ' years old.');


// ES6: Template Literals (use backticks `)
console.log(`This is ${firstName} ${lastName}. He was born in ${YEAR_OF_BIRTH}. Today he is ${calcAge(YEAR_OF_BIRTH)} years old.`);

const N = `${firstName} ${lastName}`;
console.log(N.startsWith('J'));
console.log(N.endsWith('th'));
console.log(N.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/


//////////////////////////////////
//// Lecture: Arrow Functions ////
//////////////////////////////////
/*
const YEARS = [1990, 1965, 1982, 1937];

// ES5
var ages5 = YEARS.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = YEARS.map(el => 2016 - el);


// el = argument
// => = operator
// 2016 - el = return statement

console.log(ages6);

ages6 = YEARS.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`)
console.log(ages6);

ages6 = YEARS.map((el, index) => {
    const now = new Date().getFullYear();
    const AGE = now - el;
    return `Age element ${index + 1}: ${AGE}.`
});
console.log(ages6);
*/

////////////////////////////////////
//// Lecture: Arrow Functions 2 ////
////////////////////////////////////

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function (){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

//box5.clickMe();


// ES6
const BOX6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
*/

//BOX6.clickMe();

/*
const BOX66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

BOX66.clickMe();
*/



/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);

}

new Person('Mike').myFriends5(friends);
*/

////////////////////////////////
//// Lecture: Destructuring ////
////////////////////////////////

/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

// Destructing object
const {firstName, lastName} = obj; 
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(firstName);
console.log(lastName);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]; 
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

////////////////////////////////////////////////////////////////////
//// Lecutre: Arrays - For of Loop, Find Index and Find Methods ////
////////////////////////////////////////////////////////////////////

/*
const boxes = 
document.querySelectorAll('.box');


//ES5: transform to return array (using hack)

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6
const boxesArr6 = Array.from(boxes); // from method transforms boxes from an nodelist to an array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
/*
// Shorter code
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
for(var i = 0; i <boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue;
    } 

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

//ES6: for of loop
/*
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';

}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6: Find index method
console.log(ages.findIndex(cur => cur >= 18)); // returns the index for the element the callback function returns true

// retrive element and not just index
console.log(ages.find(cur => cur >= 18));
*/

///////////////////////////////////
//// Lecture: Spread operator ////
//////////////////////////////////

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // takes array and calls function with the elements
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


/////////////////////////////////////
////  Lecture: Rest Parameters   ////
/////////////////////////////////////
/*
//ES5
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965); //not an array but array like structure
//isFullAge5(1990, 1999, 1965, 2016, 1987); 

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/

/*
//ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAge5(16, 1990, 1999, 1965); //not an array but array like structure
//isFullAge5(1990, 1999, 1965, 2016, 1987); 

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/

/////////////////////////////////////
//// Lecture: Default Parameters ////
/////////////////////////////////////

/*
// ES5
function SmithPerson (firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'american' : nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
*/

// ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/

///////////////////////
//// Lecture: Maps ////
///////////////////////

/*
const question = new Map();
question.set('question', 'What is the offical name of the lastest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
//console.log(question.size);


if(question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here');
}


//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for (let [key, value] of question.entries()) {
//     console.log(`This is ${key}, and it's set to ${value}`);
// }

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/


//////////////////////////
//// Lecture: Classes ////
//////////////////////////

/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name; 
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age); 
    }

    static greeting() {
        console.log('Hey There!');
    }

}


const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name; 
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}



var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();
*/

/*
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age); 
    }
}

//sub-class

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calcAge();
*/


////////////////////////////
//// CODING CHALLENGE 8 ////
////////////////////////////

// Create a town superclass with a constructor for name, build year

class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    calcAge() {
        var age;
        return age = new Date().getFullYear() - this.buildYear;
    }

    static calcAverageParkAge() {
        //Declare variables
        // save park ages into a variable
        let park1Age = park1.calcAge();
        let park2Age = park2.calcAge();
        let park3Age = park3.calcAge();
        let sumAges = 0; 
        let numOfParks; 
        let averageParkAge; 

        // SUM OF ALL AGES
        // Create an ARRAY and add in ages and park 
        let parkAges = [park1Age, park2Age, park3Age];

        // iterate array to get the sum of the ages using a for of loop
        for (let age of parkAges) {
            sumAges += age;
        }

        // NUMBER OF PARKS
        // get number of parks you can get the index of each element in the map and that's the number of parks you have
        // you can't use find index on maps(objects) only on arrays! Use for of instead!
        numOfParks = parkAges.length;

        // AVERAGE PARK AGE (sum of all ages / number of parks)
        averageParkAge = sumAges / numOfParks; 

        // Console log average age to Park Report
        console.log(`Our ${numOfParks} parks have an average age of ${averageParkAge} years.`);
    }

    static parkTrees1000() {

        // Create a data structure for park names and associated no. of trees use a map?
        let parks = new Map()
        parks.set('Green Park', park1.treesSum);
        parks.set('National Park', park2.treesSum);
        parks.set('Oak Park', park3.treesSum);

        // for of loop with an if 
        for (let [park, treesSum] of parks) {
            if (treesSum >= 1000) {
                console.log(`${park} has more than 1000 trees.`);
            }
        }
    }

    static totalAndAvgStreetLength() {

        // Need streets data structure




        // Total of the town's street

        




        // Average length of town's streets



        
        // Console log total and average lenght of town's streets



    }
}



// PARK SUB-CLASS: Create a park sub-class parks with park area, current age of park, and no of trees
class Park extends Town {
    constructor(name, buildYear, parkArea, treesSum) {
        super(name, buildYear);
        this.parkArea = parkArea;
        this.treesSum = treesSum;
    }

    // park class method: tree density method (no. of trees/park area)
    calcTreeDensity() {
        let treeDensity = this.treesSum / this.parkArea;
        console.log(`${this.name} has a tree density of ${treeDensity} trees per square km.`);
    }

}

// STREET SUB-CLASS: create street sub-class with a name, build year, and also length of the street, size classification tiny/small/normal (default)/big/huge
class Street extends Town {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}


// PARKS REPORT 
const parkReport = () => {
    console.log(`----PARKS REPORT----`)

    // Average age of town's parks (sum of all ages/number of parks)
    Town.calcAverageParkAge();

    // Tree density of each park
    park1.calcTreeDensity();
    park2.calcTreeDensity();
    park3.calcTreeDensity();

    // Name of park with 1000+ trees
    Town.parkTrees1000();

}

// STREETS REPORT
const streetsReport = () => {
    console.log(`----STREETS REPORT----`);

    // Total and average size of town's streets


    // Street classifications (tiny/small/normal/big/huge)


}

// NEW PARKS //
const park1 = new Park('Green Park', 1975, 50, 240);
const park2 = new Park('National Park', 1864, 20000, 1000000);
const park3 = new Park('Oak Park', 1999, 700, 500);


// NEW STREETS //
const street1 = new Street('Ocean Avenue', 1999, .5, 'big');
const street2 = new Street('Evergreen Street', 2008, 0.3, 'small');
const street3 = new Street('4th Street', 1, 2015);
const street4 = new Street('Sunset Boulevard', 1982, 2, 'huge');
   

// RUN REPORTS
parkReport();
streetsReport();


/*

I get the values for each age of the park using the calcage method for each sub class. I need to take that value and store it into a data array. How?..

park1.calcAge() returns a number
park1.calcaAge() = a number 
let age1 = park1.calcAge();

now store age into an array (key-value like map maybe? park1, age1)
*/