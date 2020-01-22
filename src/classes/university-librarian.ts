import * as interfaces from '../interfaces';

export class UniversityLibrarian implements interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistsCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
