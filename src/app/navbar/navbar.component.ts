import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titulo: string= 'Trabajo en grupo'
  titulo2: string= 'Diseño y tecnología web'

  InterpolationProperty='dark'



  constructor() { }

  ngOnInit(): void {
  }

}
