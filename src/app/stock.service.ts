import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  configUrl = "https://finnhub.io/api/v1/";
  token = "&token=ceml3piad3ieeugkaih0ceml3piad3ieeugkaihg";

  constructor(private http: HttpClient) { }

  getSymbolData(symbol:string){
    return this.http.get(
      this.configUrl + "quote?symbol=" + symbol + this.token
    );

  }
  deleteApple(stock:any){
    return this.http.delete("token"+ stock);
  }
}
