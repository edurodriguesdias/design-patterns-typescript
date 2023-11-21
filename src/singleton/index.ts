export class Service {

    private static INSTANCE: Service;

    private constructor() {
        console.log(`Was initialized`);
    }

    public static instance(): Service
    {
        if (! this.INSTANCE) {
            this.INSTANCE = new Service();
        }

        return this.INSTANCE
    }
}

let service1 = Service.instance();
let service2 = Service.instance();