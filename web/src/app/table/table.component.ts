import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY } from '@angular/material';
import { Time } from '@angular/common';
import {React} from 'react';
import {Clock} from 'react-live-clock';

export interface CheckIn {
  no: number;
  staffID: string;
  time: number;
  status: string;
}

const ELEMENT_DATA: CheckIn[] = [
  {no: 1, staffID: 'taaron', time: 8.45, status: 'On Time'},
  {no: 2, staffID: 'tlucas', time: 9.00, status: 'On Time'},
  {no: 3, staffID: 'tjoshua', time: 9.05, status: 'Late'},
  {no: 4, staffID: 'tlester', time: 8.50, status: 'On Time'},
  {no: 5, staffID: 'tnirmal', time: 9.03, status: 'Late'},
  {no: 6, staffID: 'tvivek', time: 9.03, status: 'Late'},
  {no: 7, staffID: 'tsujono', time: 9.45, status: 'Late'},
  {no: 8, staffID: 'tzulfakar', time: 9.00, status: 'On Time'},
  {no: 9, staffID: 'ttuan', time: 8.55, status: 'On Time'},
  {no: 10, staffID: 'thelmi', time: 9.10, status: 'Late'},
];

export interface MC {
  staffID: string;
  status: string;
}

const MC_DATA: MC[] = [
  { staffID: 'taaron', status: 'Approved'},
  { staffID: 'tlucas', status: 'Rejected'}
];

export interface AL {
  staffID: string;
  status: string;
}

const AL_DATA: AL[] = [
  { staffID: 'taaron', status: 'Approved'},
  { staffID: 'tlucas', status: 'Rejected'}
];

export interface Pending {
  no: number;
  staffID: string;
}

const PENDING_DATA: Pending[] = [
  { no: 1, staffID: 'taaron'},
  { no: 2, staffID: 'tlucas'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['no', 'staffID', 'time', 'status'];
  displayedColumns1: string[] = ['staffID' , 'status'];
  displayedColumns2: string[] = ['staffID' , 'status'];
  displayedColumns3: string[] = ['no', 'staffID'];
  CheckIn = ELEMENT_DATA;
  MC_Table = JSON.parse(localStorage.getItem('MC_SAVED'));
  AL_Table = JSON.parse(localStorage.getItem('AL_SAVED'));
  Pending = PENDING_DATA;

  constructor() {}

  ngOnInit() {}

}
