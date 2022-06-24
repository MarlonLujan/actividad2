import { Component, OnInit } from '@angular/core';
import {PersonajesService} from "../services/personajes.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  //camarastreaming: string= 'Cámaras de Streaming'
  //camarafotografica: string= 'Cámaras fotográficas'
  //lentespro: string= 'Lentes profesionales'
  personajes:any={ }  ;

  constructor(private service:PersonajesService)
  {

  }
  ngOnInit():void
  { this.service.getAllPersonajes().subscribe( resp=>{this.personajes=resp.results;
      console.log(this.personajes);



    }
  )

  }

}
