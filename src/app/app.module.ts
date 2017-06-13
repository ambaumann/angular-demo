import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FAQService} from './faq.service';
import {FormsModule} from '@angular/forms';
import { NewFaqComponent } from './new-faq/new-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFaqComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ FAQService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
