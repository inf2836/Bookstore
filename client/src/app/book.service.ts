import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { _throw as throwError } from 'rxjs/observable/throw';

@Injectable()
export class BookService {

  readonly uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(this.uri+'/api/books')
                    .pipe(
                     catchError(this.handleError)
                    );
  }

  getBookById(id){
    return this.http.get(this.uri+'/api/books/'+id)
                    .pipe(
                     catchError(this.handleError)
                     );
  }

  addBook(book_isbn_number, book_name, book_author, category, language, quantity){
    const book = {
      book_isbn_number: book_isbn_number,
      book_name: book_name,
      book_author: book_author,
      category: category,
      language: language,
      quantity: quantity
    };
    return this.http.post(this.uri+'/api/books/' , book)
                    .pipe(
                    catchError(this.handleError)
                    );
  }

  updateBook(id, book_isbn_number, book_name, book_author, category, language, quantity){
    const book = {
      book_isbn_number: book_isbn_number,
      book_name: book_name,
      book_author: book_author,
      category:category,
      language:language,
      quantity:quantity
    };

    return this.http.put(this.uri+'/api/books/'+id,  book)
    .pipe(
     catchError(this.handleError)
    );
  }

  deleteBook(id){
    return this.http.delete(this.uri+'/api/books/'+id)
    .pipe(
     catchError(this.handleError)
    );
  }

  getLends(){
    return this.http.get(this.uri+'/api/lendings')
    .pipe(
     catchError(this.handleError)
    );
  }


  getLendById(id){
    return this.http.get(this.uri+'/api/lendings/'+id)
    .pipe(
     catchError(this.handleError)
    );
  }


  addLend(book_name, firstname, lastname, email, returnDate){
      const lend = {
        book_name: book_name,
        firstname: firstname,
        lastname: lastname,
        email: email,
        returnDate: returnDate
    };
    return this.http.post(this.uri+'/api/lendings/' , lend)
    .pipe(
     catchError(this.handleError)
    );
  }

    updateLend(id, book_name, firstname, lastname, email, returnDate){
      const lend = {
        book_name: book_name,
        firstname: firstname,
        lastname: lastname,
        email: email,
        returnDate: returnDate
      };

      return this.http.put(this.uri+'/api/lendings/'+id,  lend)
      .pipe(
       catchError(this.handleError)
      );
    }

  deleteLend(id){
    return this.http.delete(this.uri+'/api/lendings/'+id)
    .pipe(
     catchError(this.handleError)
    );
  }

  private handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
     console.log(errorMessage);
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log(errorMessage);
   return throwError(errorMessage);
 }
}
