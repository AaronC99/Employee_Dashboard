import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MatTableDataSource, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY } from '@angular/material';

export interface CheckIn {
  attendance_uid: number;
  employeeName: string;
  time: string;
  // status: string;
}

const ELEMENT_DATA: CheckIn[] = [
];

export interface MC {
  staffID: string;
  status: string;
}

const MC_DATA: MC[] = [
];

export interface AL {
  staffID: string;
  status: string;
}

const AL_DATA: AL[] = [

];

export interface Pending {
  no: number;
  staffID: string;
}

const PENDING_DATA: Pending[] = [
  // { no: 1, staffID: 'taaron'},
  // { no: 2, staffID: 'tlucas'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['attendance_uid', 'employeeName', 'clockIn', 'lateness'] ;
  displayedColumns1: string[] = ['staffID' , 'status'];
  displayedColumns2: string[] = ['staffID' , 'status'];
  displayedColumns3: string[] = ['no', 'staffID'];
  checkIn = ELEMENT_DATA;
  MC_Table = JSON.parse(localStorage.getItem('MC_SAVED'));
  AL_Table = JSON.parse(localStorage.getItem('AL_SAVED'));
  Pending = PENDING_DATA;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    setInterval(()=> this.getAllEmployeeData(),5000);
  }

  public getAllEmployeeData() {
    this.httpService.getAllEmployeeData().then((data: CheckIn[]) => {
      this.checkIn = data;
      console.log(this.checkIn);
    });
  }

}
