import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent{

  nomePortal: string;
  cursos: string[] = ['Java', 'CSS', 'HTML'];
  constructor(){
    this.nomePortal ='http://loiane.training';
  }

}
