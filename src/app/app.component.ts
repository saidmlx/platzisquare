import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Platzisquare';
  places:any=[
    {name:'Negocio 1' ,active:true},
    {name:'Negocio 2' ,active:true},
    {name:'Negocio 3' ,active:false},
    {name:'Negocio 4' ,active:true},

  ] 
  lat:number=19.47853
  lng:number=-99.0529936
}
