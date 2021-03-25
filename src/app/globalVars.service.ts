import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { LoginServiceService } from './services/loginService.service';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {
  private idleTimer: any;
  private sidenavToggle = new Subject<boolean>();
  constructor(
    private loginSvc: LoginServiceService,
    private toastr: ToastrService,
    public router: Router) {
    this.sidenavToggle.next(false)
  }

  toggle(toggleTo: boolean) {
    this.sidenavToggle.next(toggleTo)
  }

  getToggleInfo() {
    return this.sidenavToggle.asObservable()
  }

  startTimer() {
    this.idleTimer = timer(0, 1000).subscribe(t => {
      if (t == 3000) {
        this.idleProcedure(t)
      }
    })
  }

  idleProcedure(curr: number) {
    this.toastr.warning('Uygulamadan Çıkış Yapılacak', 'Uzun Süre İşlem Yapılmadı', { positionClass: 'toast-top-center', timeOut: 5000, progressBar: true })
    timer(0, 1000).subscribe(t => {
      if (t == 5) {
        this.loginSvc.logout()
      }
    })
  }


}
