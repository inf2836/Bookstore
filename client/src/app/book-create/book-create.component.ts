import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService} from '../toaster-service.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private bookService: BookService, private toasterService: ToasterService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      book_isbn_number: ['', Validators.required],
      book_name: ['', Validators.required],
      book_author: ['', Validators.required],
      category: ['', Validators.required],
      language: ['', Validators.required],
      quantity: ['', Validators.required],
    }) ;
  }

addbook(book_isbn_number, book_name,book_author,category,language,quantity){
  this.bookService.addBook(book_isbn_number, book_name ,book_author,category,language,quantity).subscribe(() =>{
    this.router.navigate(['/list']);
    this.toasterService.Success('Buch erfolgreich eingefügt');
  },
    (err) => {
    this.toasterService.Error('Fehler', 'Bitte Füllen Sie alle Felder Richtig aus!');
    });
}
  ngOnInit() {
  }

}
