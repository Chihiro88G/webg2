export class Incident {
    constructor(
        public _id?: number,
        public name?: string,
        public author?: string,
        public published?: string,
        public description?: string,
        public price?: number
    ) { }

    // if we need ...
    // public toString(): string {
    //     return `
    // Book
    // -------------------------------
    // Name       : ${this.name}
    // Author     : ${this.author}
    // Published  : ${this.published}
    // Description: ${this.description}
    // Price      : ${this.price}
    // -------------------------------
    // `;
    // }

}