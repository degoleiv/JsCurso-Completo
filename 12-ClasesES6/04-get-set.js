class Restaurants {
    #name;
    constructor(name) {
        this.#name = name;
    }
    set name(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }

}
const r = new Restaurants('BBQ');


r.name; // Pizza
r.name = 'Pizza'; 