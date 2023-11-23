import PrototypeInterface from "./IPrototype";

export default class Drink implements PrototypeInterface {

    flavors: string[];

    constructor(flavors: string[])
    {
        this.flavors = flavors
    }

    clone() {
        return Object.assign({}, this); //shallow copy
    }
}

const obj1 = new Drink(['mango', 'strawberry', ' lemon']);
console.log('obj1', obj1);

const obj2 = obj1.clone();
console.log('obj2', obj2);

obj2.flavors[1] = 'blueberry';
console.log('obj2 copy changed', obj2);
console.log('obj1 copy changed', obj1);