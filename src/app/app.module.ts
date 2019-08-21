import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './modules/templates/layout-header/layout-header.component';
import { LayoutFooterComponent } from './modules/templates/layout-footer/layout-footer.component';
import { StoreModule } from '@ngrx/store';
import { loaderReducer, metaReducers } from './core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ appLoader: loaderReducer }, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
