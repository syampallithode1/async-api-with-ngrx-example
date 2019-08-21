import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2ContainerComponent } from './components/demo2-container/demo2-container.component';
import { Demo2RoutingModule } from './demo2-routing.module';



@NgModule({
  declarations: [Demo2ContainerComponent],
  imports: [
    CommonModule,
    Demo2RoutingModule
  ]
})
export class Demo2Module { }
