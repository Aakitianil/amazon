import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  tableList=[
    {
    Monday:"Monday",
    Tuseday:"-",
    Wednesday:"-",
    Thursday:"-",
    Friday:"-",
    Saturday:"-",
    Sunday:"-"
    },
    {
      Monday:"Tuseday",
    Tuseday:"-",
    Wednesday:"-",
    Thursday:"-",
    Friday:"-",
    Saturday:"-",
    Sunday:"-"
    },
    {
    Monday:"Wednesday",
    Tuseday:"-",
    Wednesday:"-",
    Thursday:"-",
    Friday:"-",
    Saturday:"-",
    Sunday:"-"
    },
  {
    Monday:"Thursday",
    Tuseday:"-",
    Wednesday:"-",
    Thursday:"-",
    Friday:"-",
    Saturday:"-",
    Sunday:"-"
  },
  {
    Monday:"Friday",
    Tuseday:"-",
    Wednesday:"-",
    Thursday:"-",
    Friday:"-",
    Saturday:"-",
    Sunday:"-"
  },
  {
    Monday:"Saturday",
    Tuseday:"-",
    Wednesday:"-",
    Thursday:"-",
    Friday:"-",
    Saturday:"-",
    Sunday:"-"
  
  },
  
  ]


  getTable(){
    return this.tableList
  }
}
