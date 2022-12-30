import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StockQuote } from '../Model/stockQuote';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit ,OnChanges{
@Input() stocks:StockQuote[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log("ngOninit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("chnge",changes)
  }

}
