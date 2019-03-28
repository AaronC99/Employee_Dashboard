import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'q';

export interface CheckIn {
  attendance_uid: number;
  employeeName: string;
  time: string;
}

const ELEMENT_DATA: CheckIn[] = [
];

export interface Pending {
  employee_uid: number;
  employeeName: string;
}

const PENDING_DATA: Pending[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // Varibale Declaration
  time: any = new Observable(observer =>
    window.setInterval(() => observer.next(new Date().toString()), 1000).toString
  );
  displayedColumns: string[] = ['attendance_uid', 'employeeName', 'clockIn', 'lateness'] ;
  displayedColumns3: string[] = ['employee_uid', 'employeeName'];
  checkIn = ELEMENT_DATA;
  Pending = PENDING_DATA;
  dataPending = new MatTableDataSource<Pending>(this.Pending);
  numofClockIn: number;
  numofPending: number;
  numofLateness: any;
  isLoading = true;

  constructor(private httpService: HttpService) {}
  ngOnInit() {
  // Fetch Data from API every 3 seconds
  setInterval(() => this.getAllEmployeeData(), 3000);
  setInterval(() => this.getPendingData(), 3000);
  }
  public getAllEmployeeData() {
    this.httpService.getAllEmployeeData().then((data: CheckIn[]) => {
      this.checkIn = data;
      this.numofClockIn = this.checkIn.length;
      this.numofLateness = (this.checkIn.filter( datum => datum['lateness'].substring(0, 1) !== '-')).length;
      console.log(this.checkIn);
    });
  }

  public getPendingData() {
    this.httpService.getPendingData().then((data1: Pending[]) => {
      of(PENDING_DATA).pipe()
     .subscribe(data => {
      this.Pending = data1;
      this.isLoading = false;
     }, error => this.isLoading = false);
      this.dataPending = new MatTableDataSource<Pending>(this.Pending);
      this.numofPending = this.Pending.length;
      console.log(this.Pending);
    });
  }
}
