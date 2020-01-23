import * as interfaces from '../interfaces';
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    @logMethod
    assistsCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('Assist faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teach Community');
    }
}
