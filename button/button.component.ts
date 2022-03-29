import { style } from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [class]="collor" (click)="collorButton()"     type="button" (click)="buttonIsDisable()" >{{isDisable ? 'desabilitado':'habilitado'}}</button>
  <input  type="text"  [disabled]="isDisable" >
  `,
 styles: [
  `
    .able {
      color: blue;
    }
    .disable {
      color: red;
    }
  `,
],
})
export class ButtonComponent  {

  public isDisable: boolean = true;

 public buttonIsDisable(){
  this.isDisable = !this.isDisable;
 }
 public collor: string = 'disable';

 public collorButton(){
   if (this.isDisable == true) {
     this.collor ='able'


   } else {
    this.collor ='disable';

   }

 }
}
