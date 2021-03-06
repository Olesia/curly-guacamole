import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';
import { Book, LibMgrCallback } from './interfaces';

export function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript
        }
    ];
    return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    const numOfBooks: number = books.length;
    let title: string = '';
    for (const book of books) {
        if (book.available) {
            title = book.title;
            break;
        }
    }
    console.log(`Total number of books: ${numOfBooks}`);
    console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    console.log(`Getting books in category: ${Category[category]}: `);
    const books = getAllBooks();
    const titles: string[] = [];
    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    return titles;
}

export function logBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(title);
    }
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

// export function calcTotalPages(): bigint {
//   const data = <const>[
//     { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

//     const result = data.reduce((acc: bigint, obj: any) => {
//       return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//     }, 0n)
//     return result
// }

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);

    const titles: string[] = [];
    for (const id of bookIDs) {
        const book = getBookByID(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if (args.length === 0) {
        return [];
    }
    else if (args.length === 1) {
        const arg = args[0];
        if (typeof (arg) === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }
        else if (typeof (arg) === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    }
    else if (args.length === 2) {
        const [id, available] = args;
        if (typeof (id) === 'number' && typeof (available) === 'boolean') {
            return books.filter(book => book.id === id && book.available === available)
                .map(book => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof (value) !== 'string') {
        throw new Error('Value should have been a string');
    }
}

export function bookTitleTransform(title: any) {
    assertStringValue(title);
    return [...title].reverse().join(' ');
}

export function printBook(book: Book): void {
    console.log(`${book.title}by ${book.author}`);
}

export function GetBookProp(book: Book, prop: BookProperties): any {
    if (typeof (book[prop] === 'function')) {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            }
            else {
                throw new Error('No books found');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export const logCategorySearch: LibMgrCallback = function (err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            }
            else {
                reject('No books found');
            }
        }, 2000);
    });
    return p;
}

export async function logSearchResults(category: Category): Promise<any> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles);
}