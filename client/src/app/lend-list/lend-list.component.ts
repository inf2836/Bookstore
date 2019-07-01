import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { ToasterService} from '../toaster-service.service';
import {  Lend } from '../lend.model';

@Component({
  selector: 'app-lend-list',
  templateUrl: './lend-list.component.html',
  styleUrls: ['./lend-list.component.css']
})
export class LendListComponent implements OnInit {
  lends: Lend[];
  //initializing p to one
  p: number = 1;
  displayedColumns = ['book_name', 'firstname', 'lastname', 'email',  'returnDate'];

  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
  this.key = key;
  this.reverse = !this.reverse;
}

  constructor(private bookService: BookService, private toasterService: ToasterService, private router: Router) { }

  ngOnInit() {
    this.fetchLends();
  }
  fetchLends() {
    this.bookService
      .getLends()
      .subscribe((data: Lend[]) => {
        this.lends = data;
        console.log('Data requested...');
        console.log(this.lends);
      });
  }

  editLend(id){
    this.router.navigate(['/lendedit/'+id]);
  }

  deleteLend(id){
    this.bookService.deleteLend(id).subscribe(() =>{
      this.fetchLends();
      this.toasterService.Info('Die Ausleihe wurde gelöscht');
    });
  }

  public info(){
    this.toasterService.Info('Die Ausleihe wurde gelöscht');
  }


}
