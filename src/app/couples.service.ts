import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelli } from './Model/Life';


@Injectable({
  providedIn: 'root'
})
export class CouplesService {
 

  constructor(private http:HttpClient) { }

  getMarrige(){
 return this.http.get("http://localhost:3000/marrige")
  }
  deleteMarrige(MarrigeId:any){
    return this.http.delete("http://localhost:3000/marrige/"+ MarrigeId)
  }
  
  getMarrigeDetails(MarrigeId:any):Observable<Pelli>{
    return this .http.get<Pelli>("http://localhost:3000/marrige/" + MarrigeId);
      }

      updateMarrige(marrigeId:any,pelli:Pelli):Observable<Pelli>{
        return this.http.patch<Pelli>("http://localhost:3000/marrige/"+marrigeId,pelli)
      }
      addMarrige(newMarrigeDetais:Pelli){
        return this.http.post<Pelli>("http://localhost:3000/marrige",newMarrigeDetais)
      }
}
