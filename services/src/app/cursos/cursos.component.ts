import { Component, OnInit } from '@angular/core';
import{ CursosService } from './curso.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) { // Injeção de dependencia.
    //this.cursosService = new CursosService();
    //this.cursosService = cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    //this.cursosService.emitirCursoCriado.subscribe(// Se inscreve para receber notificação.
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    ); 
  }

}
