/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implict Binding 
 function is called by a preceding dot, the object before that dot is this.
* 2. explicit binding 
this is explcitly bond to an object
* 3. new binding
Used with a construnctor function to build out objects.
* 4. window binding
when this point back to the window. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let sayMyName = function(){
    console.log(this);
};

// window.name = "this window";
sayMyName();
// Principle 2

// code example for Implicit Binding
let me = {
    name: 'Mike',
    age: 'old as dirt',
    sayName: function() {
        console.log(this.name);
    }
}
me.sayName();

// Principle 3
// code example for New Binding
var Animal = function(name, age, adorable) {
        this.name = name;
        this.age = age;
        this.adorable = adorable
    };  


var doggy = new Animal('Sugarcookie', '6 months', 'yes');
console.log(doggy)


// Principle 4

// code example for Explicit Binding
let sayName =function() {
    console.log(`My name is ${this.name}`);
};
const wife = {
    name: 'Michele',
    age: "not a day over 25.",
};
sayName.call(wife);