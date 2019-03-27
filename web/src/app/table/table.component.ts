import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatTableDataSource, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatSort, MatProgressSpinner } from '@angular/material';
import { element } from '@angular/core/src/render3';
import { Observable } from 'rxjs/internal/Observable';
import { rowsAnimation } from '../animations/template.animations';
import { of } from 'rxjs';
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
  animations: [rowsAnimation]
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
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
  setInterval(() => this.getAllEmployeeData(), 3000);
  setInterval(() => this.getPendingData(), 3000);
  // this.getAttendanceData();


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
      of(PENDING_DATA).subscribe(data => {
        this.isLoading = false;
        this.Pending = data1;
      }, error => this.isLoading = false
      );
      this.dataPending = new MatTableDataSource<Pending>(this.Pending);
      this.numofPending = this.Pending.length;
      console.log(this.Pending);
    });
  }

  // public getAttendanceData() {
  //   return this.httpService.getPListEmployeeData().then((data2: any) => {
  //     console.log('data', data2[0].list);
  //    const saveRecord = parseInt(localStorage.getItem('attendance'));
  //    if (data2[0].list !== saveRecord) {
  //      console.log('refresh');
  //      localStorage.setItem('attendance', data2[0].list);
  //      setInterval(() => this.getAllEmployeeData(), 3000);
  //      setInterval(() => this.getPendingData(), 3000);
  //    } else {
  //      console.log('no refresh');
  //    }
  //   });
  // }

}
