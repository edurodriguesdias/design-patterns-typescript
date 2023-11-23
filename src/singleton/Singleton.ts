export default class Singleton {

    private static INSTANCE: Singleton|null;

    private constructor() {
        console.log('Was initialized');
    }

    public static instance(): Singleton
    {
        if (! this.INSTANCE) {
            this.INSTANCE = new Singleton();
        }

        return this.INSTANCE
    }
}

let service1 = Singleton.instance();
let service2 = Singleton.instance();