import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, RefBook, Shelf } from './classes';
import { PersonBook, BookOrUndefined, BookReqiredFields, UpdatedBook, CreateCustomerFunctionType } from './types';
import * as functions from './functions';
import Encyclopedia from './classes/encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// Task 02.01. Basic Types CALLS
// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// const titleAndAuthor = getBookAuthorByIndex(2);
// console.log(titleAndAuthor);
// console.log(calcTotalPages());

// Task 3.01
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach((title: string)=>console.log(title));


// Task 3.02
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number)=>string;
// idGenerator = (name:string, id: number)=>`${name}${id}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Bob', 20));
// console.log(getBookByID(1));

// task 3.03
// createCustomer('Jack');
// createCustomer('Jack', 20);
// createCustomer('Jack', 20, 'Lviv');
// const titles = getBookTitlesByCategory();
// console.log(titles);
// logFirstAvailable();

// const myBooks: string[] = сheckoutBooks('Ann', ...[1,2,3]);
// console.log(myBooks);

// task 3.04
// const checkOutBooks = getTitles(false);
// console.log(checkOutBooks);

// task 3.05
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform('ID'));

// task 4.01
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages:200,
//   markDamaged: (reason: string)=>console.log(`Damaged: ${reason}`)
// }

// printBook(myBook);
// myBook.markDamaged('Missing back cover');

// task 4.02
// const f = (damage: string) => console.log(`Damage reporter: ${damage}`);
// const logDamage: DamageLogger = f;
// logDamage('Missing back cover');

// task 4.03
// const favoriteAuthor: Author = {
//   name: 'Anna',
//   email: 'anna@gmail.com',
//   numBooksPublished: 4
// }

// const favoriteLabrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@gmail.com',
//   department: 'Classics',
//   assistsCustomer: (name: string)=>console.log(`Assist ${name}`)
// }

// task 4.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// }
// console.log(offer?.magazine)

// task 4.05
// console.log(GetBookProp(getAllBooks()[0], 'title'))
// console.log(GetBookProp(getAllBooks()[0], 'markDamaged'))
// console.log(GetBookProp(getAllBooks()[0], 'isbn'))

// task 5.01
// const ref: ReferenceItem= new ReferenceItem('Our new title', 2020);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);

// task 5.02
// const refBook: Encyclopedia = new Encyclopedia('Title', 2020, 3);
// refBook.printItem();
// console.log(refBook);

// task 5.03
// const refBook: Encyclopedia = new Encyclopedia('Title', 2020, 3);
// refBook.printCitation();
// console.log(refBook);

// task 5.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistsCustomer('Boris');

// task 5.05
// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'anna@gmail.com',
//   title: 'Introduction to Union types',
//   author: 'Unknown',
//   available: true,
//   category: Category.JavaScript,
//   id: 1
// };

// console.log(personBook);

// task 6.03
// const refBook: RefBook = new RefBook('Title', 2020, 3);
// refBook.printItem();
// console.log(refBook);

// task 6.05
// import('./classes').then(module => {
//   const reader = new module.Reader;
//   reader.name = 'Ann';
//   reader.take(getAllBooks()[0]);
//   console.log(reader);
// });

// task 7.01
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//   ];
//   const result = functions.Purge<Book>(inventory);
//   console.log(result);

//   const result2 = functions.Purge([1, 2, 3, 4, 5]);
//   console.log(result2);

// task 7.02
// const inventory: Array<Book> = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//   ];

//   const bookShelf: Shelf<Book> = new Shelf();
//   inventory.forEach(book => bookShelf.add(book));
//   const book = bookShelf.getFirst();
//   console.log(book);

//   const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf();
// magazineShelf.add(...magazines);
// const mag = magazineShelf.getFirst();
// console.log(mag);

// task 7.03
//   const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf();
// magazineShelf.add(...magazines);
// magazineShelf.printTitles();

// const result = magazineShelf.find('Five Points');
// console.log(result);

// task 7.04
// const book: BookReqiredFields = {
//   id: 1,
//   title: 'Book title',
//   author: 'Anna',
//   available: false,
//   category: Category.Angular,
//   pages: 250,
//   markDamaged: null
// };

// const updatedBook: UpdatedBook = {
//   id: 2
// };

// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// functions.createCustomer(...params);

// task 8.01
// const obj = new UniversityLibrarian();

// task 8.02
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian);
// (fLibrarian as any).printLibrarian();
// fLibrarian['printLibrarian']();
// Object.getPrototypeOf(fLibrarian).printLibrarian.apply(fLibrarian);

// task 8.03
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// task 8.04
// const enc = new Encyclopedia('The best Enceclopedia', 2020, 1);
// enc.printItem();

// task 8.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistsCustomer('Boris');

// task 8.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);

// task 8.07
// const enc = new Encyclopedia('The best Enceclopedia', 2020, 1);
// enc.copies = -10;
// console.log(enc);

// task 9.01
// console.log('Begin');
// functions.getBooksByCategory(Category.JavaScript, functions.logCategorySearch);
// console.log('End');

// task 9.02
// console.log('Begin');
// functions.getBooksByCategoryPromise(Category.JavaScript)
// .then(titles => {
//   console.log(titles);
//   return titles.length;
// })
// .then(num => console.log(num))
// .catch(reason => console.log(reason));
// console.log('End');

// task 9.03
// console.log('Begin');
// functions.logSearchResults(Category.Software)
// .catch(reason => console.log(reason));
// console.log('End');