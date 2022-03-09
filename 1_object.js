const bmwAuto = {
    name: 'BMW',
    model: 'X6',
    year: 2021,
    
    getAutoType() {
        return `${this.name} ${this.model} - ${this.year}`;
    }
}