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

class Autopilot {
    start() {
        return 'Navigation is started';
    }
}

class Car {
    constructor(autopilot) {
        // composition
        this.engine = new Engine();
        this.wiring = new Wiring();
        this.fuelPump = new FuelPump();
        this.autopilot = autopilot;
    }
        // delegation
    start() {
        this.engine.start();
        this.wiring.start();
        this.fuelPump.start();
    }
}

class Airplain {
    constructor(autopilot) {
        this.autopilot = autopilot;
    }
}

const boeing = new Airplain(new Autopilot());

class Helicopter {
    constructor(autopilot) {
        this.autopilot = autopilot;
    }
}

const mi8 = new Airplain(new Autopilot());