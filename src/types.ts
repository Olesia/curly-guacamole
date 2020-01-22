import { Book, Person } from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Book & Person;
export type BookOrUndefined = Book | undefined;

export type BookReqiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;