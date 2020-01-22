abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //   console.log('Creating a new ReferenceItem');
    //   this.title = newTitle;
    //   this.year = newYear;
    // }

    private _publisher: string;

    static department: string = 'Research department';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem');
    }

    printItem(): void {
        console.log(`${this.title} was published at ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

export { ReferenceItem };