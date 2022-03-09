class SpecialAuto {
    public name: string;
    public model: string;
    public year: number;
    private vin: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.vin = (new Date().getTime());
    }

    get vinNumber() {
        return this.vin;
    }
}

//instance creation
const tsAudiAuto = new SpecialAuto('Audi', 'Q7', 2020);

//private property
console.log(audiAuto.vin)  

//safe method
console.log(tsAudiAuto.vinNumber)