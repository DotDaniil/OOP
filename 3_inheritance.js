class Auto {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getAutoType() {
        return `${this.name} ${this.model} - ${this.year}`;
    }
}

class TeslaCar extends Auto {
    constructor(name, model, year) {
        super(name, model, year);
        this.name = name;
        this.model = `${model} Model`;
        this.year = year;
    }

    getCarModel() {
        return this.model;
    }
}

// instance creation
const teslaAuto = new TeslaCar('Tesla', '3', 2019);
// inherited method
console.log(teslaAuto.getAutoType());
// own method
console.log(teslaAuto.getCarModel());