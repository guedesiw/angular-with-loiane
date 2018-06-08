import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent,
    CursoDetalheComponent
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }