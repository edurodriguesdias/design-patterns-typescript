import Singleton from '../../../../src/singleton/Singleton'

describe('Singleton', () => {

    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        Singleton['INSTANCE'] = null;
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });
    
    it('should create only one instance of Singleton', () => {
        const instance1 = Singleton.instance();
        const instance2 = Singleton.instance();

        expect(instance1).toBe(instance2);
        expect(instance1).toBeInstanceOf(Singleton);
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('Was initialized');

    });
});