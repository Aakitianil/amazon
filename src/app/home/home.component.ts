import { Component, OnInit } from '@angular/core';
import { StockQuote } from '../Model/stockQuote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stockList:StockQuote[]=[];
 
  constructor() { }

  ngOnInit(): void {
  }
  addSymbol($event:StockQuote){
    this.stockList.push($event);
   
    console.log("home " ,$event);

  }

}
