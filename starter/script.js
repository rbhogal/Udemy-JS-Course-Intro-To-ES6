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



