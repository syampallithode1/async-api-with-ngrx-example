import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'demo1',
    loadChildren: () => import('./modules/demo1/demo1.module').then(demo1 => demo1.Demo1Module)
  },
  {
    path: 'demo2',
    loadChildren: () => import('./modules/demo2/demo2.module').then(demo2 => demo2.Demo2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
