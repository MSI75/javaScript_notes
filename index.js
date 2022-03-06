/* const person = {
    name: " MSI ",
    age: 23,
    getName: function () {
        return 'MSi'
    }
}
console.dir(person) */


// let object = new String("Bangladesh");

// console.dir(object)

// let number = new Number(75)
// console.dir(number)


/* let obj = {
    firstName: "john",
    lastName: "Dou",
    fullName: function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}

console.log(obj.fullName()) */

/* let obj = {
    name: " john ",
    age: 30,
    city: " New York "
}

// document.getElementById("demo").innerHTML = obj
let text = " "
for (let x in obj) {
    text += obj[x];
}

document.getElementById("demo").innerHTML = text; */

/* let obj = {
    name: " john ",
    age: 30,
    city: " New York "
}

// let value = Object.values(obj)
// console.log(value)
// document.getElementById("demo").innerHTML = value;

let myString = JSON.stringify(obj)
// console.log(myString)
document.getElementById("demo").innerHTML = myString; */


const person = {
    name: "John",
    age: 30,
    date: new Date()
};

let myString = JSON.stringify(person);
// console.log(myString)
// document.getElementById("demo").innerHTML = myString;