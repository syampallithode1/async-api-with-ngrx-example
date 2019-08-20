import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo2ContainerComponent } from './components/demo2-container/demo2-container.component';


const routes: Routes = [
  {
    path: '',
    component: Demo2ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo2RoutingModule { }
