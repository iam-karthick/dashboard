import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { route } from './app.routing';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './component/header/header.component';
import { FooterComponent }  from './component/footer/footer.component';
import { MainComponent }  from './component/main/main.component';
import { SliderComponent }  from './component/slider/slider.component';
import { SwitchComponent }  from './component/switch/switch.component';


@NgModule({
  imports:      [ BrowserModule ,FormsModule ,route],
  declarations: [ AppComponent ,HeaderComponent ,FooterComponent ,MainComponent ,SliderComponent ,SwitchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
