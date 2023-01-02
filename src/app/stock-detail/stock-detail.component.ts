import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Stock } from '../Model/stock';
import { StockQuote } from '../Model/stockQuote';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit ,OnChanges{
 
@Input() stocks:Stock[]=[];
fullData!:string
  constructor(private stockservice:StockService) { }

  ngOnInit(): void {
    console.log("ngOninit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes)
  }
  deleteApple(stocks:string){
     
      // this.stockservice.deleteApple(this.fullData).subscribe(result => {
        
      //   console.log("Delete Flipkart details",result)
        
        
      // },
     
      // )
      
  
      
    }
  
  }
  

  


