import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { StockQuote } from '../Model/stockQuote';

@Component({
  selector: 'app-stocknews',
  templateUrl: './stocknews.component.html',
  styleUrls: ['./stocknews.component.css']
})
export class StocknewsComponent implements OnInit {
  @Input() stocknewList:StockQuote[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log("ngOninit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("chnge",changes)
  }

}
