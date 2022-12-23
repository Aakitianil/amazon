import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CouplesService } from '../couples.service';

@Component({
  selector: 'app-fighting',
  templateUrl: './fighting.component.html',
  styleUrls: ['./fighting.component.css']
})
export class FightingComponent implements OnInit {
@Input()marrigeDetails:any
regForm:FormGroup 
marrigeId:any
  constructor(private couplesservice:CouplesService,private route:ActivatedRoute) { 
this.regForm= new FormGroup({
  Wifes: new FormControl("",[Validators.required,Validators.minLength(4)]),
  Husbends:new FormControl("",[Validators.required,Validators.minLength(4)]),
  Marriges:new FormControl("",[Validators.required,Validators.minLength(4)]),
  Kottakuplease:new FormControl("",[Validators.required,Validators.minLength(4)]),
  MadeinHell:new FormControl("",[Validators.required,Validators.minLength(4)]),
 
})
}

ngOnInit(): void {

  this.marrigeId=this.route.snapshot.paramMap.get("id")
  if(this.marrigeId){
  
  // this.marrigeDetails = this.couplesservice.getMarrigeDetails(this.marrigeId);
  this.couplesservice.getMarrigeDetails(this.marrigeId).subscribe(result =>{
    this.marrigeDetails = result;
  


  this.regForm.patchValue({

    Shirts: this.marrigeDetails.Shirts,
    Tshirts: this.marrigeDetails.Tshirts,
    pants: this.marrigeDetails.pants,
    shoes: this.marrigeDetails.shoes,
  });

  });
  }

// this.regForm.controls['Shirts'].getRawValue();
// this.regForm.touched.valueOf();


}

updateMarrige(){

  if(this.marrigeId){
  const flipkart = this.regForm.value;
  console.log(this.regForm)

  this.couplesservice.updateMarrige(this.marrigeId,flipkart).subscribe(result =>{
    
  });
}else{
  const newflipkart = this.regForm.value;
  console.log(this.regForm)

  this.couplesservice.addMarrige(newflipkart).subscribe(result =>{
    

});




  
}
}
}


