import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesComunesService {

  count:number=0;

  constructor() {}

  gettotalcount(){

    return this.count++;

}

  sayhello(){

    console.log("hola")

  }


}
