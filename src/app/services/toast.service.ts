import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  warning_top_center(msg: string, timeout: number, title?: string) {
    if (title) {
      this.toastr.warning(msg, title, { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.warning(msg, '', { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
  }

  error_top_center(msg:string, timeout:number, title?:string) {
    if (title) {
      this.toastr.error(msg, title, { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.error(msg, '', { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
  }

  success_top_center(msg: string, timeout: number, title?: string) {
    if (title) {
      this.toastr.success(msg, title, { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.success(msg, '', { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
  }

  warning_bot_center(msg: string, timeout: number, title?: string) {
    if (title) {
      this.toastr.warning(msg, title, { positionClass: 'toast-bottom-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.warning(msg, '', { positionClass: 'toast-bottom-center', timeOut: (timeout * 1000) })
  }

  error_bot_center(msg: string, timeout: number, title?: string) {
    if (title) {
      this.toastr.error(msg, title, { positionClass: 'toast-bottom-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.error(msg, '', { positionClass: 'toast-bottom-center', timeOut: (timeout * 1000) })
  }

  success_bot_center(msg: string, timeout: number, title?: string) {
    if (title) {
      this.toastr.success(msg, title, { positionClass: 'toast-bottom-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.success(msg, '', { positionClass: 'toast-bottom-center', timeOut: (timeout * 1000) })
  }

  show_top_center(msg: string, timeout: number, title?: string){
    if (title) {
      this.toastr.show(msg, title, { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
    }
    else this.toastr.show(msg, '', { positionClass: 'toast-top-center', timeOut: (timeout * 1000) })
  }

}
