import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  texto: string= 'Una fotografía representa el instante perfecto en el que el tiempo se congeló'
  texto1: string= 'Para reflexionar'
  texto2: string= 'Ir a algún lugar'
  texto3: string= 'Destacado'
  texto4: string= 'Hace 2 Días'

  constructor() { }

  ngOnInit(): void {
  }

}
