let values = [20, 30, 40]

let doubled = values.map((n) => n*2);
console.log(doubled)

//object
function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}`
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
    return `I have a ${this.pet} named ${this.pet_name}`
}

//with arrow function, is possible to expand the object (in the example above, we create a new variable called pet_name)
let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry.info());

//map for unique characters
let string = 'ajkdfnaskjfhdskjhfgkcsbfkjchkjdhgjkhdgkjshgkjlsdfhk';

let letters = new Map();
for (let i=0; i<string.length; i++) {
    let letter = string[i];
    if (!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}

console.log(letters)




//closure simple example
let call = () => {
    let secret = 'ES6 rocks!';
    let reveal = () => {
        console.log(secret);
    }
    reveal()
}

call();
//with closure we can acess exposed local variable


//functions factory, we can create another function with functions
const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add_ful = addSuffix("ful");
let f = add_ful("fruit"); //----------> one example
console.log(f);



//generators
function* letterMaker() {
    let count = 0;
    while (count < 4) {
        yield count += 1;
    }

    let letterGen = letterMaker();
    console.log(letterGen.next().value);
    console.log(letterGen.next().value);
    console.log(letterGen.next().value);
    console.log(letterGen.next().value);
}


//promisse
let p = new Promisse((resolve, reject) => {
    reject('Reject promise data');
})

p.then(response => console.log(response))
    .catch(error => console.log(error));

//promisse with timeout
let p = new Promisse((resolve, reject) => {
    setTimeout(() => {
        
    }, resolve('Resolved promise data'), 3000);
})

p.then(response => console.log(response))
    .catch(error => console.log(error));

console.log('after promise consumption')

const root = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(root, { method: "GET"})
    .then(response => console.log(response.json()) 
    .then(json => console.log(json)));