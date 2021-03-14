import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {
  private sidenavToggle = new Subject<boolean>();
  constructor(public router: Router) {
    this.sidenavToggle.next(false)
  }

  toggle(toggleTo: boolean) {
    this.sidenavToggle.next(toggleTo)
  }

  getToggleInfo() {
    return this.sidenavToggle.asObservable()
  }




}
