export class Book {
    private _id: number;
    private _title: string;
    private _author: string;
    private _price: number;
  
    constructor(id: number, title: string, author: string, price: number) {
      this._id = id;
      this._title = title;
      this._author = author;
      this._price = price;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(newId: number) {
      this._id = newId;
    }
  
    get title(): string {
      return this._title;
    }
  
    set title(newTitle: string) {
      this._title = newTitle;
    }
  
    get author(): string {
      return this._author;
    }
  
    set author(newAuthor: string) {
      this._author = newAuthor;
    }
  
    get price(): number {
      return this._price;
    }
  
    set price(newPrice: number) {
      this._price = newPrice;
    }
  }
  