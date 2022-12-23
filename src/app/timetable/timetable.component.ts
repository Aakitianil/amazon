import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  
 tables:any[]=[];

  constructor(private tableservice:TableService) { }

  ngOnInit(): void {
  
 this.tables=this.tableservice.getTable()
  }
}
