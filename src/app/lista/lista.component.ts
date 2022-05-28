import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nuestrotitulo=true
    titulolista="Sus cosas por hacer"

  listatodo=[
    {
      "titulo":"Limpiar la cocina",
      "descripcion":"No olvidar limpiar la estanteria"
    },
    {
      "titulo":"Llamar a Enrique",
      "descripcion":"Recordarle el pago de sus impuestos"
    },
    {
      "titulo":"Regar las plantas",
      "descripcion":"Limpiar la mala hierba del jardín"
    },
    {
      "titulo":"Pagar los impuestos",
      "descripcion":"Verificar la declaración de la renta"
    },
    {
      "titulo":"Comprar fruta",
      "descripcion":"Ir al supermercado a comprar Manzanas"
    },
    {
      "titulo":"Lavar el carro",
      "descripcion":"Cambiar monedas para la máquina de lavado"
    },
    {
      "titulo":"Ir a la lavanderia",
      "descripcion":"Llevar la chaqueta blanca"
    },
    {
      "titulo":"Cambiar contraseña del banco",
      "descripcion":"Aprovechar de ver movimientos bancarios"
    }
  ]
  InterpolationProperty='dark'

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.nuestrotitulo=false
  }
}
