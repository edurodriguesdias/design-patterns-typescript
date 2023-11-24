import Drink from '../../../../src/prototype/Drink'

describe("Prototype", () => {
    it("should clone a drink with the same flavors", () => {
        const flavors = [
            'mango',
            'lemon',
            'raspberry'
        ];
        const originalInstance = new Drink(flavors);

        const copyInstance = originalInstance.clone();

        expect(copyInstance).toBeInstanceOf(Drink);
        expect(copyInstance).not.toBe(originalInstance);

        expect(copyInstance.flavors).toEqual(flavors);
        
        copyInstance.flavors.push('strawberry');

        expect(originalInstance.flavors).toEqual(flavors);
    });
});