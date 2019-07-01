import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { Book } from '../book.model';
import { ToasterService} from '../toaster-service.service';

@Component({
  selector: 'app-lend-create',
  templateUrl: './lend-create.component.html',
  styleUrls: ['./lend-create.component.css']
})
export class LendCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private bookService: BookService ,private toasterService: ToasterService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      book_name: '',
      firstname: '',
      lastname: '',
      email: '',
      returnDate: '',
    }) ;
   }

 addlend(book_name, firstname, lastname, email, returnDate){
     this.bookService.addLend(book_name, firstname, lastname, email, returnDate).subscribe(() =>{
       this.router.navigate(['/lendlist']);
       this.toasterService.Success('Ausleihe erfolgreich eingefügt');
       this.toasterService.Success('Notification wurde per E-mail geschickt');
     },
       (err) => {
        console.log(err.message);   
       this.toasterService.Error('Fehler', 'Bitte Füllen Sie alle Felder Richtig aus!');
       });
   }

  ngOnInit() {

  }

}
