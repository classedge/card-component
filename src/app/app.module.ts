import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalViewComponent } from './component/modal-view/modal-view.component';
import { CardViewComponent } from './component/card-view/card-view.component';
import { ModalDirective } from './directive/modal.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ModalViewComponent,
    CardViewComponent,
    ModalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ModalViewComponent, CardViewComponent, ModalDirective],
  entryComponents: [ModalViewComponent, CardViewComponent]
})
export class AppModule { }
