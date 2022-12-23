import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkartlist',
  templateUrl: './flipkartlist.component.html',
  styleUrls: ['./flipkartlist.component.css']
})
export class FlipkartlistComponent implements OnInit {
  // flipkarts:any[]=[];
  flipkarts:any
  flipKartSelectDetails:any;

  constructor(private flipkartservice:FlipkartService) { }

  ngOnInit(): void {
  //  this.flipkarts= this.flipkartservice.getFlipKart()
  // this.flipkartservice.getFlipKart().subscribe(result =>{
  //   this.flipkarts = result
  // });
  this.fetchData();
  }
  fetchData(){
    this.flipkartservice.getFlipKart().subscribe(result =>{
      this.flipkarts = result
    });
  }
  flipkartSelect(ind:any){
    this.flipKartSelectDetails=this.flipkarts[ind]

  }

  deleteFlipkart(flipkartId:any){
    // this.flipkartservice.deleteFlipkart(FlipkartId).subscribe(result=>{
    //   console.log("Delete Flipkart details",result)
    // })
    this.flipkartservice.deleteFlipkart(flipkartId).subscribe(result => {
      
      console.log("Delete Flipkart details",result)
      this.fetchData();
      
    },
    (err) =>{console.log("Delete error:",err)}
    )
    

    
  }

}
