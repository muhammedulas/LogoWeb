import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { menuAcces } from '../models/menuAccess';
import { LoginServiceService } from './loginService.service';
import { RightsService } from './rights.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {

  constructor(private loginSvc: LoginServiceService, private toast: ToastrService, private router: Router, private rights:RightsService) { }
  route(moduleNr: number, route: string) {
    let array = this.loginSvc.menuAccess
    function checkModule(array: menuAcces) {
      return array.MODULENR == moduleNr
    }
    let isAllowed = array.filter(checkModule)
    if (isAllowed.length > 0) {
      if (isAllowed[0].ALLOWED === 1){
        this.rights.getRights().subscribe(res=>{
          this.rights.rights = res.items
          console.log(res.items)
        })
        this.router.navigate([route])
      }
      else this.unAuthorized(route)
    }
    else this.unAuthorized(route)
  }

  unAuthorized(r) {
    /* this.router.navigate([r]) */
    this.toast.error("Bu menü için yetkiniz bulunmamaktadır", "", { positionClass: "toast-top-center" })
  }

}
