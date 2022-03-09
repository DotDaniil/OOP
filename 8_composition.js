class Engine {
    start() {
        return 'engine is started';
    }
}

class Wiring {
    start() {
        return 'Wiring is started';
    }
}

class FuelPump {
    start() {
        return 'FuelPuml is started';
    }
}

class Car {
    constructor() {
        // composition
        this.engine = new Engine();
        this.wiring = new Wiring();
        this.fuelPump = new FuelPump();
    }
        // delegation
    start() {
        this.engine.start();
        this.wiring.start();
        this.fuelPump.start();
    }
}