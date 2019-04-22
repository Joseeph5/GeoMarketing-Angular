import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/Dialog/delete-confirm-dialog/delete-confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {

   }

  openDialogConfirm(msg) {
    return this.dialog.open(DeleteConfirmDialogComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data :{
        message : msg
      }
    });
  }
}
