import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormularioComponent implements OnInit {

  correo: string= 'Correo Electrónico'
  correo1: string= 'Confirmar correo (Verifique que todo esté bien)'
  asunto: string= 'Escriba un mensaje'
  enviar: string= 'Enviar'







  newEmail=
    {
      email:'tucorreoaqui@example.com'

    }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit($event: MouseEvent) {

    console.log($event)

  }
}
