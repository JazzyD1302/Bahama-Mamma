import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BenfitsComponent } from './benfits/benfits.component';
import { InfraredComponent } from './infrared/infrared.component';
import { BrushComponent } from './brush/brush.component';
import { PricesComponent } from './prices/prices.component';

const routes: Routes = [
  {path: '',component: MainComponent},
  {path: 'Benfits',component: BenfitsComponent}, 
  {path: 'Infrared_Sauna',component: InfraredComponent},
  {path: 'Air_Brush',component: BrushComponent},
  {path: 'Prices',component: PricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
