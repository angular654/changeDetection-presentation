import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AsyncContainerComponent } from './async-container/async-container.component';
import { AsyncPresenterComponent } from './async-presenter/async-presenter.component';
import { CdrSampleComponent } from './cdr-sample/cdr-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AsyncContainerComponent,
    AsyncPresenterComponent,
    CdrSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
