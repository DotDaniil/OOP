class PolyAuto {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getAutoType() {
        return `${this.name} ${this.model} - ${this.year}`;
    }
}

class BmwCar extends PolyAuto {
    getAutoType() {
        return `${this.name}, ${this.model} - ${this.year}`;
    }
}

class AudiCar extends PolyAuto {
    getAutoType() {
        return `${this.name} - ${this.model} / ${this.year}`;
    }
}

class TeslaCar extends PolyAuto {
    getAutoType() {
        return `${this.name}, ${this.model}, ${this.year}`;
    }
}

const bmwAuto = new PolyAuto('BMW', 'X6', 2021);
const audiAuto = new PolyAuto('Audi', 'Q7', 2022);
const teslaAuto = new PolyAuto('Tesla', '3', 2019);

const autos = [bmwAuto, audiAuto, teslaAuto];

const getAutoTypes = (autos) =>
    autos.map(auto => auto.getAutoType());

const autoTypes = getAutoTypes(autos);

console.log(autoTypes)