import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { distRoute } from 'src/app/models/distRoute';
import { distRouteLine } from 'src/app/models/distRouteLine';
import { DistributionRoutesService } from 'src/app/services/distributionRoutes.service';

@Component({
  selector: 'app-Dialog_editInspectDistRoute',
  templateUrl: './Dialog_editInspectDistRoute.component.html',
  styleUrls: ['./Dialog_editInspectDistRoute.component.scss']
})
export class Dialog_editInspectDistRouteComponent implements OnInit {
  @ViewChild('tableRef') tableRef!: MatTable<distRouteLine[]>
  public displayedColumns = ["LineNr", "BegDistCode", "BegDistDef", "EndDistCode", "EndDistDef", "SalesmanCode", "SalesmanName", "Remove"]
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectDistRouteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: distRoute,
    private toast: ToastrService,
    private svc: DistributionRoutesService
  ) {
  }

  ngOnInit() {
    console.log(this.data)
  }

  update() {
    this.svc.update(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {

      console.log(err)
    })
  }


  newLine() {
    let emptyLine = {
      INTERNAL_REFERENCE: 1,
      DISTROUTREF: 0,
      LINENR: this.data.DIST_RT_LINES.items[this.data.DIST_RT_LINES.items.length - 1].LINENR + 1,
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
    this.data.DIST_RT_LINES.items.push(emptyLine);
    this.tableRef.renderRows();
  }

  removeLine(index: number) {
    if (this.data.DIST_RT_LINES.items.length <= 1) return
    this.data.DIST_RT_LINES.items = this.data.DIST_RT_LINES.items.filter(q => {
      return this.data.DIST_RT_LINES.items.indexOf(q) != index
    })
    this.tableRef.renderRows()
  }

}
