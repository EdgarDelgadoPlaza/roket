import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareaRocketComponent } from './component/tarea-rocket/tarea-rocket.component';



const routes: Routes = [

  {
    path: '',
    component: TareaRocketComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaRocketRoutingModule { }
