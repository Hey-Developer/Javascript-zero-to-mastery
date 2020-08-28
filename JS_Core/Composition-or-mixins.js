/* 
Problems with inheritance:
suppose there is class Humans with methods like eating walking and talking 
we create a subclass  Animal of it using prototype inheritance hence all the feature like eating walking and talking comes in animals
now i make another subclass Robot of Humans So all the feature like eating walking and talking comes in robots
but we know that robots can't eat so one method is totally waste in robot class

hence we have a new concept of mixins or composition in which
first we create features like eating walking and talking and then attach as per the requirement with the objects
for ex 
a create a object of human then i will add features like eating walking and talking to, 
then i create a object of animal then i will add features like eating walking and talking to it
now i create a object of robot but i add only those feature which i recquired that is
walking and talking.
 */

let eating = {
    eat: function() {
        return "I can eat";
    },
};

let walking = {
    walk: function() {
        return "I can walk";
    },
};

let talking = {
    talk: function() {
        return "I can talk";
    },
};

// Now our features are  created let attach them to our object
// Compositing features to the object
let rahul = Object.assign({}, eating, walking, talking);
console.log("rahul can access:" + rahul.eat());
console.log("rahul can access:" + rahul.walk());
console.log("rahul can access:" + rahul.talk());

let robo1 = Object.assign({}, walking, talking);
console.log("robo1 can access:" + robo1.talk());
console.log("robo1 can access:" + robo1.walk());

// Let create a new feature for robot
let scanner = {
    scan: function() {
        return "Scanning Is Started...";
    },
};

robo1 = Object.assign({}, scanner);

console.log("New feature Of robo1:" + robo1.scan());

/* 
If we will create 100 of human Object--> like rahul,sonam,prince and sooo on
it this case we have to attach the same feature to all the 100 objects
this will result in code duplicacy hence here
we use constructor/class

 */

let Humans = function() {};
Object.assign(Humans.prototype, eating, walking, talking);

let Cnu = new Humans();
console.log("New Object Cnu f=of Huumans");

console.log("Cnu can access:" + rahul.eat());
console.log("Cnu can access:" + rahul.walk());
console.log("Cnu can access:" + rahul.talk());

// Let shorted the code by creating function for attaching the featureS
// Mixin function
function mixin(target, ...features) {
    Object.assign(target.prototype, ...features);
}

let Robot = function() {};
mixin(Robot, walking, talking, scanner);
let robocop = new Robot();
console.log(
    "NEw Object robocop can access:" +
    robocop.walk() +
    ", " +
    robocop.talk() +
    ", " +
    robocop.scan()
);