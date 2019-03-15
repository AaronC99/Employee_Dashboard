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

export interface Pending {
  employee_uid: number;
  employeeName: string;
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
  displayedColumns3: string[] = ['employee_uid', 'employeeName'];
  checkIn = ELEMENT_DATA;
  Pending = PENDING_DATA;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    setInterval(() => this.getAllEmployeeData(), 3000);
    setInterval(() => this.getPendingData(), 3000);
  }

  public getAllEmployeeData() {
    this.httpService.getAllEmployeeData().then((data: CheckIn[]) => {
      this.checkIn = data;
      console.log(this.checkIn);
    });
  }

  public getPendingData() {
    this.httpService.getPendingData().then((data1: Pending[]) => {
      this.Pending = data1;
      console.log(this.Pending);
    });
  }

}
