import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../Model/stock';
import { StockQuote } from '../Model/stockQuote';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocknews',
  templateUrl: './stocknews.component.html',
  styleUrls: ['./stocknews.component.css']
})
export class StocknewsComponent implements OnInit {
  @Input() stock:Stock[]=[];
  newsData: Object[]=[]; 
  constructor(public stockservice:StockService, public route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ngOninit",id);
    console.log("new", this.stockservice.stock);
    this.stockservice.getStockNews(this.stockservice.stock.StockSymbol.displaySymbol).subscribe(data => {
      this.newsData = JSON.parse(JSON.stringify(data));
      // this.newsData= this.newsData.slice(Math.max(this.newsData.length - 3, 1))
      console.log("newsdata", this.newsData);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes)
  }

}
