import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkartchaild',
  templateUrl: './flipkartchaild.component.html',
  styleUrls: ['./flipkartchaild.component.css']
})
export class FlipkartchaildComponent implements OnInit {
  @Input() flipkartDetails:any
  @Output() selectedStudentChange = new EventEmitter();
  flipkartId:any
  regForm:FormGroup
  constructor(private flipkartservice:FlipkartService,private route:ActivatedRoute) { 
this.regForm = new FormGroup({
  Shirts: new FormControl("",[Validators.required,Validators.minLength(4)]),
  Tshirts:new FormControl("",[Validators.required,Validators.minLength(4)]),
  Kottakuplease:new FormControl("",[Validators.required,Validators.minLength(4)]),
  shoes:new FormControl("",[Validators.required,Validators.minLength(4)]),

})
  }
 
  ngOnInit(): void {

    this.flipkartId=this.route.snapshot.paramMap.get("id")
    if(this.flipkartId){
    
    // this.flipkartDetails = this.flipkartservice.getFlipKartDetails(this.flipkartId);
    this.flipkartservice.getFlipkartDetails(this.flipkartId).subscribe(result =>{
      this.flipkartDetails = result;
    


    this.regForm.patchValue({

      Shirts: this.flipkartDetails.Shirts,
      Tshirts: this.flipkartDetails.Tshirts,
      pants: this.flipkartDetails.pants,
      shoes: this.flipkartDetails.shoes
    });

    });
    }

  // this.regForm.controls['Shirts'].getRawValue();
  // this.regForm.touched.valueOf();


  }

  updateFlipKart(){

    if(this.flipkartId){
    const flipkart = this.regForm.value;
    console.log(this.regForm)

    this.flipkartservice.updateFlipKart(this.flipkartId,flipkart).subscribe(result =>{
      
    });
  }else{
    const newflipkart = this.regForm.value;
    console.log(this.regForm)

    this.flipkartservice.addFlipKart(newflipkart).subscribe(result =>{
      

  });
  

 

    
}
}
}
