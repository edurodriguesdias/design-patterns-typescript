import PrototypeInterface from "./IPrototype";

export default class Drink implements PrototypeInterface {
    flavors: string[];

    constructor(flavors: string[])
    {
        this.flavors = flavors
    }

    public clone(): this {

        const clone = Object.create(this);
        
        clone.flavors = this.flavors.slice();

        return clone;
    }
}