import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BenfitsComponent } from './benfits/benfits.component';
import { InfraredComponent } from './infrared/infrared.component';
import { BrushComponent } from './brush/brush.component';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    BenfitsComponent,
    InfraredComponent,
    BrushComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
