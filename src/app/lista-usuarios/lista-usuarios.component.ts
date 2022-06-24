import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FuncionesComunesService} from "../funciones-comunes.service";



@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers:[FuncionesComunesService]
})
export class ListaUsuariosComponent implements OnInit {

  @Input()users:Array<string>
  @Output()totalUser: EventEmitter<number>=new EventEmitter<number>()


  constructor(private funcionescomunes:FuncionesComunesService) { }

  ngOnInit(): void {
  }

  senduser(){

    //this.count ++

    const users=this.funcionescomunes.gettotalcount();

    this.totalUser.emit(users)

    const message=this.funcionescomunes.sayhello();


  }
}
