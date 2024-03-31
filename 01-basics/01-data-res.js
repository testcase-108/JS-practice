// PRIMITIVE : number, boolean, string, bigInt, null, undefined, symbol

// NON_PRIMITIVE : array, function , objects

let id = Symbol('123')
let anotherOne = Symbol('123')

console.log(id === anotherOne)
console.log(id == anotherOne)

//NON-PRIMITIVE : 
let heroes = ["a", "b", "c"];
let objecto = {
    name : "Krishna",
    age : 22  
}

const myFunc = function(){
    console.log("HEllo World")
}

console.log(objecto.name)
console.log(myFunc())