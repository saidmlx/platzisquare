import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVHSplyGEUhUuw4rZkvai-oXRxm5_ED6g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
