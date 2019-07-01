import { Injectable } from '@angular/core';
declare var toastr: any
@Injectable()
export class ToasterService {

  constructor() {
    this.settings();
   }

  Success(title: string, message?: string){
    toastr.success(title,message);
  }

  Warning(title: string, message: string){
    toastr.warning(title,message);
  }

  Error(message: string,title?: string){
    toastr.error(title,message);
  }

  Info(message:string){
    toastr.info(message);
  }


  settings(){
    toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "3000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
  }
 }
}
