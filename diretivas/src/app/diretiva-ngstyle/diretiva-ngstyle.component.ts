import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte:number = 10;

  mudarAtivo(){
    this.ativo = !this.ativo;
    this.tamanhoFonte = this.ativo ? 50 : 10;
    console.log(this.ativo ? "Ativo" : "Desativado");
  }

  constructor() { }
  ngOnInit() {
  }

}
