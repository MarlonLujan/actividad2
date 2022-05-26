import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  camarastreaming: string= 'Cámaras de Streaming'
  camarafotografica: string= 'Cámaras fotográficas'
  lentespro: string= 'Lentes profesionales'



  constructor() { }

  ngOnInit(): void {
  }

}
