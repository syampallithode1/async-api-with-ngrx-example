import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo1ContainerComponent } from './components/demo1-container/demo1-container.component';
import { Demo1RoutingModule } from './demo1-routing.module';
import { Demo1Service } from './services/demo1.service';
import { StoreModule } from '@ngrx/store';
import { reducer as demo1Reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { Demo1Effects } from './effects';
import { Demo1Reducers } from './models';



@NgModule({
  declarations: [Demo1ContainerComponent],
  imports: [
    CommonModule,
    Demo1RoutingModule,
    StoreModule.forFeature(Demo1Reducers.demo1Reducer, demo1Reducer),
    EffectsModule.forFeature([Demo1Effects]),
  ],
  providers: [Demo1Service]
})
export class Demo1Module { }
