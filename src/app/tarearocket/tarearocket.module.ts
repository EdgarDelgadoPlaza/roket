import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaRocketComponent } from './component/tarea-rocket/tarea-rocket.component';
import { TareaRocketRoutingModule } from './tarearocket-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapBoxComponent } from './component/map-box/map-box.component';

import * as mapboxgl from 'mapbox-gl';
import { TreeService } from './services/tree.service';
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw';


@NgModule({
  declarations: [
    TareaRocketComponent,
    MapBoxComponent
  ],
  imports: [
    CommonModule,
    TareaRocketRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TreeService
  ]
})
export class TarearocketModule { }
