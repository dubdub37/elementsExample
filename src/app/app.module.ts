import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';
import { Injector } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const custom = createCustomElement(AppComponent, {injector});
  customElements.define('elements-github', custom)
  }

  ngDoBootstrap() {

  }
}
