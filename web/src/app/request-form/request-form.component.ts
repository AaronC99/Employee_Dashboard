import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelect } from '@angular/material';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  reqForm: FormGroup;
  submitted = false;
  success = false;
  staffID: string;
  fromDate: any;
  toDate: any;
  leaveSelect: string;

  constructor(public dialogRef: MatDialogRef<RequestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.reqForm = this.formBuilder.group({
      staffID: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      leaveSelect: ['', Validators.required]
    });

    if (localStorage.getItem('AL_SAVED') === null) {
      localStorage.setItem('AL_SAVED', '[]');
    }
    if (localStorage.getItem('MC_SAVED') === null) {
      localStorage.setItem('MC_SAVED', '[]');
    }
  }

 onSubmit() {
    this.submitted = true;

    if (this.reqForm.invalid) {
        return;
    } else if (this.reqForm.valid) {
      this.dialogRef.close('Request sent');
      console.log(
      'Staff Id: ', this.reqForm.value.staffID, '\n',
      'Select: ', this.reqForm.value.leaveSelect, '\n',
      'From: ', this.reqForm.value.fromDate, '\n',
      'To: ', this.reqForm.value.toDate);

    this.success = true;
  }
}

  request() {
    this.submitted = true;
    if (this.reqForm.invalid) {
      return;
    } else if (this.reqForm.valid) {
      // const AL_SAVED_2 = {
      //   staffID: this.reqForm.value.staffID,
      //   status: 'Pending'
      // };
      // const ITEM_SAVED = JSON.parse(localStorage.getItem('AL_SAVED'));
      // ITEM_SAVED.push(AL_SAVED_2);
      // localStorage.setItem('AL_SAVED', JSON.stringify(ITEM_SAVED));
      // window.location.reload();
      const MC_SAVED_2 = {
        staffID: this.reqForm.value.staffID,
        status: 'Pending'
      };
      const ITEM_SAVED1 = JSON.parse(localStorage.getItem('MC_SAVED'));
      ITEM_SAVED1.push(MC_SAVED_2);
      localStorage.setItem('MC_SAVED', JSON.stringify(ITEM_SAVED1));
      window.location.reload();
    this.dialogRef.close('Request sent');
    }
    this.success = true;
  }

  close() {
    this.dialogRef.close();
  }

}
