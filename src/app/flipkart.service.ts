import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flipkart } from './Model/flipkart';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

flipKartList:any
  constructor(private http: HttpClient) { }

  // flipKartList=[
  //   {
  //   Shirts:"Lee",
  //   Tshirts:"Uspolo",
  //   pants:"Denim",
  //   shoes:"adidas",
  //   ShoesWomen:"Uspolo",
  //   Shorts:"RR",
  //   Watch:"apple",
  //   Imagepath:"../assets/images.jpg"
  //   },
  //   {
  //     Shirts:"Allen solly",
  //     Tshirts:"Lee",
  //     pants:"Denim2",
  //     shoes:"adidas1",
  //     ShoesWomen:"Uspolo2",
  //     Shorts:"RR1",
  //     Watch:"apple2",
  //     Imagepath:"../assets/images.jpg"
  //     },
  //     {
  //       Shirts:"spykars",
  //       Tshirts:"Uspolo3",
  //       pants:"Denim6",
  //       shoes:"adidas8",
  //       ShoesWomen:"Uspolo3",
  //       Shorts:"RR8",
  //       Watch:"apple1",
  //       Imagepath:"../assets/images.jpg"
  //       },
  // ]
  getFlipKart(){
  //  return this.flipKartList
  return this.http.get(" http://localhost:3000/flipkart");
  }

  getFlipkartDetails(FlipkartId:any):Observable<flipkart>{
return this .http.get<flipkart>("http://localhost:3000/flipkart/" + FlipkartId);
  }
//     getFlipKartDetails(FlipkartId:any):flipkart{
//   return this.flipKartList.filter((flipkart:flipkart)=>flipkart.Shirts == FlipkartId)[0]
//  }

 updateFlipKart(FlipkartId:any,flipkart:flipkart):Observable<flipkart>{

//  return this.http.put<flipkart>("http://localhost:3000/flipkart/"+ FlipkartId,flipkart);
return this.http.patch<flipkart>("http://localhost:3000/flipkart/"+ FlipkartId,flipkart);


}
addFlipKart(newFlipkartDetails:flipkart){
  return this.http.post<flipkart>("http://localhost:3000/flipkart", newFlipkartDetails);

}
deleteFlipkart(flipkartId:any){
  return this.http.delete("http://localhost:3000/flipkart/"+ flipkartId)
}
}

