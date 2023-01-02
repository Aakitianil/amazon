
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Stock } from '../Model/stock';
import { StockQuote } from '../Model/stockQuote';
import { StockSymbol } from '../Model/stockSymbol';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent implements OnInit {
  @Output() addStocker: EventEmitter<Stock>= new EventEmitter<Stock>();
  symbol!:string;
  constructor(private stockService:StockService) { }

  ngOnInit(): void {
  }
  tarckSymbol(){
    let stSymbol:StockSymbol=new StockSymbol();
    forkJoin({
      search: this.stockService.getSearchData(this.symbol),
      symbol: this.stockService.getSymbolData(this.symbol)
      }).subscribe(({search,symbol})=>{
        let stQuote:StockQuote=new StockQuote();
        let jsonData= JSON.parse(JSON.stringify(data));

localStorage.setItem( this.symbol,this.symbol); 
console.log("total",data)

stQuote.curentPrice=jsonData.c;
stQuote.change=jsonData.d;
stQuote.persentChange=jsonData.dp;
stQuote.high=jsonData.h;
stQuote.low=jsonData.l;
stQuote.open=jsonData.o;
stQuote.priviceclose=jsonData.pc;
stQuote.timestamp=jsonData.t;
console.log("anil",stQuote)
        let stock: Stock = new Stock();
        stock.StockQuote= search;
        stock.StockSymbol=symbol;
         
      this.addStocker.emit(stock);

      });
    this.stockService.getSearchData(this.symbol).subscribe((data:Object)=>{
      let jsonData=JSON.parse(JSON.stringify(data));
     
      localStorage.setItem( this.symbol,this.symbol); 
      // console.log("getSearchData",jsonData)
      // console.log("getSearchData",jsonData.getJSONData(0))
      // console.log("getSearchData",Object.values(0))
    stSymbol.description = jsonData.result[0].description;
    stSymbol.displaySymbol =jsonData.result[0].displaySymbol;
    stSymbol.symbol = jsonData.result[0].symbol;
    stSymbol.type = jsonData.result[0].type;
    console.log(stSymbol)
    let stock: Stock = new Stock();
   stock.StockQuote= stQuote;
   stock.StockSymbol=stSymbol
    
 this.addStocker.emit(stock);
    }
    )
    let stQuote:StockQuote=new StockQuote();
    this.stockService.getSymbolData(this.symbol).subscribe((data:object)=>{

      

     
       console.log("data::",data)
      
    });
   
  }
}
