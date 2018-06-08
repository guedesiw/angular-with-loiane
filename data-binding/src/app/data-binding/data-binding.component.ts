import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls:['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com'
  cursoAngular:boolean = true;
  urlImagem:string = 'http://lorempixel.com/400/200/nature/'
  valorAtual:string;
  valorSalvo:string;
  isMouseOver:boolean = false;
  nome:string = 'abc';
  pessoa:any = {nome:'Jack',idade:20};
  nomeDoCurso:string = 'Angular';
  valor:number = 20;
  deletarCiclo:boolean = false;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    console.log(this.valorAtual);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor)
  }

  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
