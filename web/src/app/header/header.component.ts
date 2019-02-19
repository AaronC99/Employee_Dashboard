import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestFormComponent } from '../request-form/request-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'CoE E.A.T.S';

  constructor(public dialog: MatDialog) { }

  reqDialog(): void {
    const dialogRef = this.dialog.open(RequestFormComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

    });
  }
  ngOnInit() {
  }

}
