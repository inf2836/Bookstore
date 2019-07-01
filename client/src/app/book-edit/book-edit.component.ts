import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { ToasterService} from '../toaster-service.service';

import { Book } from '../book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id:String;
  book: any = {};
  updatedForm: FormGroup;

  constructor(private bookService: BookService, private toasterService: ToasterService, private router: Router, private route:ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
   }

  createForm(){
     this.updatedForm = this.fb.group({
      book_isbn_number: '',
      book_name: '',
      book_author: '',
      category: '',
      language: '',
      quantity: ''
    }) ;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;

        this.bookService.getBookById(this.id).subscribe(res => {
        this.book = res;
        this.updatedForm.get('book_isbn_number').setValue(this.book.book_isbn_number);
        this.updatedForm.get('book_name').setValue(this.book.book_name);
        this.updatedForm.get('book_author').setValue(this.book.book_author);
        this.updatedForm.get('category').setValue(this.book.category);
        this.updatedForm.get('language').setValue(this.book.language);
        this.updatedForm.get('quantity').setValue(this.book.quantity);

      });
    });
  }

  updatebook(book_isbn_number, book_name, book_author, category, language, quantity){
    this.bookService.updateBook(this.id, book_isbn_number,book_name,book_author,category,language,quantity).subscribe(() =>{
      this.router.navigate(['/list']);
      this.toasterService.Info('Buch erfolgreich geändert');
      },
        (err) => {
        this.toasterService.Error('Fehler', 'Bitte Füllen Sie alle Felder Richtig aus!');
        });
  }
}
