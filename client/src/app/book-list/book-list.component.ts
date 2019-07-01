import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { ToasterService} from '../toaster-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  createForm: FormGroup;
  //initializing p to one
  p: number = 1;
  displayedColumns = ['book_isbn_number', 'book_name', 'book_author', 'category', 'language',  'quantity'];

  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
  this.key = key;
  this.reverse = !this.reverse;
}

  constructor(private fb: FormBuilder,private bookService: BookService, private toasterService: ToasterService, private router: Router) {
    this.createForm = this.fb.group({
      book_isbn_number: ['', Validators.required],
      book_name: ['', Validators.required],
      book_author: ['', Validators.required],
      category: ['', Validators.required],
      language: ['', Validators.required],
      quantity: ['', Validators.required],
    }) ;
  }

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
        console.log('Data requested...');
        console.log(this.books);
      });
  }

  addbook(book_isbn_number, book_name,book_author,category,language,quantity){
    this.bookService.addBook(book_isbn_number, book_name ,book_author,category,language,quantity).subscribe(() =>{
      this.router.navigate(['/list']);
      this.fetchBooks();
      this.toasterService.Success('Buch erfolgreich eingefügt');
    },
      (err) => {
      this.toasterService.Error('Fehler', 'Bitte Füllen Sie alle Felder Richtig aus!');
      });
  }

  editBook(id){
    this.router.navigate(['/edit/'+id]);
  }

  deleteBook(id){
    this.bookService.deleteBook(id).subscribe(() =>{
      this.fetchBooks();
      this.toasterService.Info('Das Buch wurde gelöscht');
    });
  }

  public info(){
    this.toasterService.Info('Das Buch wurde gelöscht');
  }

}
