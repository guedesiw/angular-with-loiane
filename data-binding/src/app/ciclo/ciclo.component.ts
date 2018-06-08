import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial:number = 15;

  @Output() novoValor:any = new EventEmitter();

  onNovoValor(){
    this.novoValor.emit({newValue: this.valorInicial});
  }

  constructor() {
    console.log("Construtor")
   }

  ngOnInit() {
    console.log("Iniciou")
  }

  ngOnChanges(){
    console.log("Change")
  }

  ngDoCheck(){
    console.log("ngDoCheck")
  }

  ngAfterContentInit(){
    console.log("ngAfeterContentInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }

  ngViewInit(){
    console.log("ngViewInit")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
  }

}
