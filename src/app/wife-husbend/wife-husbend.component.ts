import { Component, OnInit } from '@angular/core';
import { CouplesService } from '../couples.service';

@Component({
  selector: 'app-wife-husbend',
  templateUrl: './wife-husbend.component.html',
  styleUrls: ['./wife-husbend.component.css']
})
export class WifeHusbendComponent implements OnInit {
  marriges:any
  marrigetDetails:any
  constructor(private coupleservice:CouplesService) { }

  ngOnInit(): void {
// this.coupleservice.getMarrige().subscribe(result =>{
//      this.marriges = result
this.fetchData();
  }
  fetchData(){
    this.coupleservice.getMarrige().subscribe(result =>{
      this.marriges = result
    });
  
  }
  MarrigeSelect(ind:any){
    this.marrigetDetails=this.marriges[ind]

  }
  
 
deleteMarrige(marrigeId:any){
 this.coupleservice.deleteMarrige(marrigeId).subscribe(result => {
      
  console.log("Delete Flipkart details",result)
  this.fetchData();
  
},
(err) =>{console.log("Delete error:",err)}
)


 }
  }


