import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorStyle]'
})
export class ErrorStyleDirective {

  constructor(private el:ElementRef) { 

    this.el.nativeElement.style.color="red"
    this.el.nativeElement.style.fontFamily="Roboto"
    this.el.nativeElement.style.fontWeight="Bolt"
  }

}
