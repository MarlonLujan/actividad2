import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-agregar-usuarios',
  templateUrl: './formulario-agregar-usuarios.component.html',
  styleUrls: ['./formulario-agregar-usuarios.component.css']
})
export class FormularioAgregarUsuariosComponent implements OnInit {


users:string[]=[];
  totaluserss:number=0;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(value: string) {
    this.users.push(value)
    console.log(this.users)

  }

  addnewUser(number) {

    this.totaluserss=number

  }
}
