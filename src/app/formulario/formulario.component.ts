import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {





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
