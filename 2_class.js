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

// instance creation
const bmwAuto = new Auto('BMW', 'X6', 2021);
const audiAuto = new Auto('Audi', 'Q7', 2022);
const teslaAuto = new Auto('Tesla', '3', 2019);

console.log(bmwAuto)
console.log(audiAuto)
console.log(teslaAuto)