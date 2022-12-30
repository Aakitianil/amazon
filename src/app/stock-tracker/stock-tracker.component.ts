import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StockQuote } from '../Model/stockQuote';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent implements OnInit {
  @Output() addStocker: EventEmitter<StockQuote>= new EventEmitter<StockQuote>();
  symbol!:string;
  constructor(private stockService:StockService) { }

  ngOnInit(): void {
  }
  tarckSymbol(){
    this.stockService.getSymbolData(this.symbol).subscribe((data:object)=>{
      let jsonData= JSON.parse(JSON.stringify(data));
let abc:StockQuote=new StockQuote();
localStorage.setItem( this.symbol,this.symbol); 
console.log("total",data)

abc.curentPrice=jsonData.c;
abc.change=jsonData.d;
abc.persentChange=jsonData.dp;
abc.high=jsonData.h;
abc.low=jsonData.l;
abc.open=jsonData.o;
abc.priviceclose=jsonData.pc;
abc.timestamp=jsonData.t;
console.log("anil",abc)

      this.addStocker.emit(abc);
      // console.log("data::",data)
    });

  }
}
