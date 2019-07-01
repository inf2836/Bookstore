import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

import { BookService } from './book.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LendListComponent } from './lend-list/lend-list.component';
import { LendEditComponent } from './lend-edit/lend-edit.component';
import { LendCreateComponent } from './lend-create/lend-create.component';
import { ToasterService} from './toaster-service.service';




const routes: Routes = [
  { path: 'create', component: BookCreateComponent },
  { path: 'createlend', component: LendCreateComponent },
  { path: 'edit/:id', component: BookEditComponent },
  { path: 'list' , component: BookListComponent },
  { path: 'lendlist' , component: LendListComponent },
  { path: 'lendedit/:id' , component: LendEditComponent },
  { path:'', redirectTo: 'list' , pathMatch:'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    LendListComponent,
    LendEditComponent,
    LendCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2OrderModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,//including into imports
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, ToasterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
