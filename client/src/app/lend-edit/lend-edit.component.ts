import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { BookService } from '../book.service';
import { ToasterService} from '../toaster-service.service';

import { Lend } from '../Lend.model';

@Component({
  selector: 'app-Lend-edit',
  templateUrl: './Lend-edit.component.html',
  styleUrls: ['./Lend-edit.component.css']
})
export class LendEditComponent implements OnInit {

  id:String;
  Lend: any = {};
  updatedForm: FormGroup;

  constructor(private bookService: BookService, private router: Router, private toasterService: ToasterService, private route:ActivatedRoute, private fb: FormBuilder) {
   this.createForm();
   }

  createForm(){
     this.updatedForm = this.fb.group({
      book_name: '',
      firstname: '',
      lastname: '',
      email: '',
      returnDate: ''
    }) ;
  }


    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params.id;

          this.bookService.getLendById(this.id).subscribe(res => {
          this.Lend = res;
          this.updatedForm.get('book_name').setValue(this.Lend.book_name);
          this.updatedForm.get('firstname').setValue(this.Lend.firstname);
          this.updatedForm.get('lastname').setValue(this.Lend.lastname);
          this.updatedForm.get('email').setValue(this.Lend.email);
          this.updatedForm.get('returnDate').setValue(this.Lend.returnDate);

        });
      });

    }

    updatelend(book_name, firstname, lastname, email, returnDate){
      this.bookService.updateLend(this.id, book_name, firstname, lastname, email, returnDate).subscribe(() =>{
        this.router.navigate(['/lendlist']);
        });
    }

    public info(){
      this.toasterService.Info('Ausleihe erfolgreich geändert');
      this.toasterService.Info('Notification wurde per E-mail geschickt');
    }

}
