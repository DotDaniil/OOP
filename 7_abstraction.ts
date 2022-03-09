abstract class GoodAutoFactory {
    readonly name: string;
    readonly model: string;
    year: number;

    abstract getAutoType(): string;

    getAutoModel(): string {
        return this.model;
    }
}

class GoodAuto extends GoodAutoFactory {
    public name: string;
    public model: string;
    public year: number;

    constructor(name: string, model: string, year: number) {
        super();
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getAutoType() {
        return `${this.name} ${this.model} / ${this.year}`;
    }
}

const bmwAuto = new GoodAuto('BMW', 'X6', 2021);

// own method
console.log(bmwAuto.getAutoType())

//inherited from abstract class method
console.log(bmwAuto.getAutoModel())