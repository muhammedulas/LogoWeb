import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { distRoute } from 'src/app/models/distRoute';
import { distRouteLine } from 'src/app/models/distRouteLine';
import { DistributionRoutesService } from 'src/app/services/distributionRoutes.service';

@Component({
  selector: 'app-Dialog_newDistRoute',
  templateUrl: './Dialog_newDistRoute.component.html',
  styleUrls: ['./Dialog_newDistRoute.component.scss']
})
export class Dialog_newDistRouteComponent implements OnInit {
  @ViewChild('tableRef') tableRef!: MatTable<distRouteLine[]>
  public date = new Date();
  public newRecord: distRoute = new distRoute();
  public displayedColumns = ["LineNr", "BegDistCode", "BegDistDef", "EndDistCode", "EndDistDef", "SalesmanCode", "SalesmanName", "Remove"]
  constructor(
    public dialogRef: MatDialogRef<Dialog_newDistRouteComponent>,
    private toast: ToastrService,
    private svc: DistributionRoutesService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    this.svc.add(this.newRecord).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      if (err.error.ModelState.ValError0[0]) {
        this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
        console.log(err)
      }
    })
  }

  initializeRecord() {
    this.newRecord = {
      INTERNAL_REFERENCE: 0,
      CODE: "",
      NAME: "",
      AUXIL_CODE: "",
      AUTH_CODE: "",
      RECORD_STATUS: 0,
      CREATED_BY: 0,
      DATE_CREATED: "",
      HOUR_CREATED: 0,
      MIN_CREATED: 0,
      SEC_CREATED: 0,
      MODIFIED_BY: 0,
      DATE_MODIFIED: "",
      HOUR_MODIFIED: 0,
      MIN_MODIFIED: 0,
      SEC_MODIFIED: 0,
      DATA_SITEID: 0,
      XML_ATTRIBUTE: 2,
      DATA_REFERENCE: 0,
      TEXTINC: 0,
      WFSTATUS: 0,
      INFO_LOGICALREF: 0,
      INFO_DISTROUTREF: 0,
      INFO_LINENR: 0,
      INFO_SALESMANREF: 0,
      INFO_BCOUNTRYCODE: "",
      INFO_BCITYCODE: "",
      INFO_BTOWNCODE: "",
      INFO_BDISTRICTCODE: "",
      INFO_ECOUNTRYCODE: "",
      INFO_ECITYCODE: "",
      INFO_ETOWNCODE: "",
      INFO_EDISTRICTCODE: "",
      SALESMANCODE: "",
      SALESMANNAME: "",
      BDISTRICTREF: 0,
      BDISTRICT: "",
      BTOWNREF: 0,
      BTOWN: "",
      BCITYREF: 0,
      BCITY: "",
      BCOUNTRYNR: 0,
      BCOUNTRYREF: 0,
      BCOUNTRY: "",
      EDISTRICTREF: 0,
      EDISTRICT: "",
      ETOWNREF: 0,
      ETOWN: "",
      ECITYREF: 0,
      ECITY: "",
      ECOUNTRYNR: 0,
      ECOUNTRYREF: 0,
      ECOUNTRY: "",
      DIST_RT_LINES: {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            DISTROUTREF: 0,
            LINENR: 1,
            SALESMANREF: 0,
            BCOUNTRYCODE: "",
            BCITYCODE: "",
            BTOWNCODE: "",
            BDISTRICTCODE: "",
            ECOUNTRYCODE: "",
            ECITYCODE: "",
            ETOWNCODE: "",
            EDISTRICTCODE: "",
            SALESMANCODE: "",
            SALESMANNAME: "",
            BDISTRICTREF: 1,
            BDISTRICT: "",
            BTOWNREF: 0,
            BTOWN: "",
            BCITYREF: 0,
            BCITY: "",
            BCOUNTRYNR: 0,
            BCOUNTRYREF: 0,
            BCOUNTRY: "",
            EDISTRICTREF: 0,
            EDISTRICT: "",
            ETOWNREF: 0,
            ETOWN: "",
            ECITYREF: 0,
            ECITY: "",
            ECOUNTRYNR: 0,
            ECOUNTRYREF: 0,
            ECOUNTRY: ""
          }
        ]
      },
      DELLIST: "TÜRKİYE",
      TEXTCHG: 0,
      ITEXT: "",
      FLDALS: "",
      XBUFS: ""
    }
  }


  newLine() {
    let emptyLine = {
      INTERNAL_REFERENCE: 1,
      DISTROUTREF: 0,
      LINENR: this.newRecord.DIST_RT_LINES.items[this.newRecord.DIST_RT_LINES.items.length - 1].LINENR + 1,
      SALESMANREF: 0,
      BCOUNTRYCODE: "",
      BCITYCODE: "",
      BTOWNCODE: "",
      BDISTRICTCODE: "",
      ECOUNTRYCODE: "",
      ECITYCODE: "",
      ETOWNCODE: "",
      EDISTRICTCODE: "",
      SALESMANCODE: "",
      SALESMANNAME: "",
      BDISTRICTREF: 1,
      BDISTRICT: "",
      BTOWNREF: 0,
      BTOWN: "",
      BCITYREF: 0,
      BCITY: "",
      BCOUNTRYNR: 0,
      BCOUNTRYREF: 0,
      BCOUNTRY: "",
      EDISTRICTREF: 0,
      EDISTRICT: "",
      ETOWNREF: 0,
      ETOWN: "",
      ECITYREF: 0,
      ECITY: "",
      ECOUNTRYNR: 0,
      ECOUNTRYREF: 0,
      ECOUNTRY: ""
    }
    this.newRecord.DIST_RT_LINES.items.push(emptyLine)
    this.tableRef.renderRows()
  }

  removeLine(index: number) {
    if(this.newRecord.DIST_RT_LINES.items.length <= 1) return 
    this.newRecord.DIST_RT_LINES.items = this.newRecord.DIST_RT_LINES.items.filter(q => {
      return this.newRecord.DIST_RT_LINES.items.indexOf(q) != index
    })
    this.tableRef.renderRows()
  }
}
