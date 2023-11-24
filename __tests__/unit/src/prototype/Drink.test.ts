import Drink from '../../../src/prototype/Drink'

describe("Prototype", () => {
    it("ensure that clone is the same", () => {
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