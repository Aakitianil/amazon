import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login!:FormGroup;
  title = 'Demo3';
 
  ngOnInit():void{
 this.login = new FormGroup({


userName:new FormControl("",[Validators.required,Validators.minLength(5)]),
password:new FormControl('',[Validators.required,Validators.minLength(4)])
})
// show(f:any){
// console.log(f)
// }
  }
}