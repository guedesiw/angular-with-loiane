import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[higlightMouse]'
})
export class HiglightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // HostListener == Esculta evento no hospedeiro
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = 'white'
  }
  //@HostBinding('style.backgroundColor') backgroundColor:string; // Permite o binding de uma classe ou atributo para uma variável.
  @HostBinding('style.backgroundColor') get setColor(){
      //Código extra;
      return this.backgroundColor;
  }  // Permite o binding de uma classe ou atributo para uma variável.
  private backgroundColor:string
  constructor(
      
    //private _elementRef:ElementRef,
   // private _renderer:Renderer
  ) { }

}
