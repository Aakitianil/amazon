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
  constructor(private stockservice:StockService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ngOninit",id);
    console.log("new", this.stockservice.stock);
    this.stockservice.getStockNews(this.stockservice.stock.StockSymbol.displaySymbol).subscribe(data => {
      console.log("newsdata", data);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("chnge",changes)
  }

}
