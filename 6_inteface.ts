interface AutoFactory {
    readonly name: string;
    readonly model: string;
    year: number;

    getAutoType(): string;
}

class InterfaceAuto implements AutoFactory {
    public name: string;
    public model: string;
    public year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getAutoType() {
        return `${this.name} ${this.model} / ${this.year}`;
    }
}