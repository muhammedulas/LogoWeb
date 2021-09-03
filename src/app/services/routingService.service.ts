import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { menuAcces } from '../models/menuAccess';
import { LoginServiceService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {

  constructor(private loginSvc: LoginServiceService, private toast: ToastrService, private router: Router) { }
  route(moduleNr: number, route: string) {
    let array = this.loginSvc.menuAccess
    function checkModule(array: menuAcces) {
      return array.MODULENR == moduleNr
    }
    let isAllowed = array.filter(checkModule)
    if (isAllowed.length > 0) {
      if (isAllowed[0].ALLOWED === 1) this.router.navigate([route])
      else this.unAuthorized()
    }
    else this.unAuthorized()
  }

  unAuthorized() {
    this.toast.error("Bu menü için yetkiniz bulunmamaktadır", "", { positionClass: "toast-top-center" })
  }
}
