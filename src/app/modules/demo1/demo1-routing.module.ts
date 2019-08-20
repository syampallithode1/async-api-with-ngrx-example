import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1ContainerComponent } from './components/demo1-container/demo1-container.component';


const routes: Routes = [
  {
    path: '',
    component: Demo1ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo1RoutingModule { }
