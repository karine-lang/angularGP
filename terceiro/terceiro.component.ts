import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template:`
  <h2 [class.sucesso]="isSucesso">PALMEIRAS!!!!</h2>
  <p [style.color]="'orange'">binding de estilo é legal <p>
  <p [style.color]="cor">binding de estilo é legal <p>
  <button type="button"(click)="cliqueBotao()"> CLIKA EM MIM</button>

  <input type="text" [value]= "valorCampo" [disabled]="isDisable" >
  `,
  styles: [
    `.sucesso{
      color: pink;

    }
    .error{
      color: aqua;
    }`
  ]

})
export class TerceiroComponent  {
  public valorCampo: string = "Digite seu email";
  public isDisable: boolean  = false;
  public isSucesso: boolean = false;
  public cor:string = "blue";

  private _contador: number =0;


  public cliqueBotao(){
    this.isSucesso = !this.isSucesso;
    console.log("botão clicado"+ ++this._contador )

  }





}
