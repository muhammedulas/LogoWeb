import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { safeDeposit } from 'src/app/models/safeDeposit';
import { SafeDepositService } from 'src/app/services/safeDeposit.service';

@Component({
  selector: 'app-Dialog_newSD',
  templateUrl: './Dialog_newSD.component.html',
  styleUrls: ['./Dialog_newSD.component.scss']
})
export class Dialog_newSDComponent implements OnInit {
  public SD: safeDeposit = new safeDeposit();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newSDComponent>,
    private toast: ToastrService,
    private svc: SafeDepositService
  ) {
    this.initializeSafeDeposit()
  }

  ngOnInit() {
  }

  create(){
    this.svc.addSD(this.SD).subscribe(res=>{
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    },err=>{
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

  initializeSafeDeposit() {
    this.SD = {
      "INTERNAL_REFERENCE": 0,
      "RECORD_STATUS": 0,
      "CODE": "",
      "DESCRIPTION": "",
      "AUXIL_CODE": "",
      "AUTH_CODE": "",
      "USAGE_NOTE": "",
      "ADDRESS1": "",
      "ADDRESS2": "",
      "CREATED_BY": 0,
      "DATE_CREATED": "",
      "HOUR_CREATED": 0,
      "MIN_CREATED": 0,
      "SEC_CREATED": 0,
      "MODIFIED_BY": 0,
      "DATE_MODIFIED": "",
      "HOUR_MODIFIED": 0,
      "MIN_MODIFIED": 0,
      "SEC_MODIFIED": 0,
      "DATA_SITEID": 0,
      "DATA_REFERENCE": 1,
      "XBUFS": "1",
      "GL_CODE1": "",
      "ACCOUNTREF1": 0,
      "OHP_CODE1": "",
      "CENTERREF1": 0,
      "GL_CODE2": "",
      "ACCOUNTREF2": 0,
      "OHP_CODE2": "",
      "CENTERREF2": 0,
      "XML_ATTRIBUTE": 1,
      "PROJECT_CODE": "",
      "PROJECTREF": 0,
      "CCURRENCY": 0,
      "CURR_RATE_TYPE": 1,
      "FIXED_CURR_TYPE": 0,
      "GL_CODE3": "",
      "ACCOUNTREF3": 0,
      "OHP_CODE3": "",
      "CENTERREF3": 0,
      "GL_CODE4": "",
      "ACCOUNTREF4": 0,
      "OHP_CODE4": "",
      "CENTERREF4": 0,
      "GL_CODE5": "",
      "ACCOUNTREF5": 0,
      "OHP_CODE5": "",
      "CENTERREF5": 0,
      "DIVISION": 0,
      "GUID": ""
    }
  }

}
