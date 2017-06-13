import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FAQService } from './faq.service';
import { NewFaqComponent } from './new-faq/new-faq.component';
import { FaqDetailPageComponent } from './faq-detail-page/faq-detail-page.component';
import { FaqListPageComponent } from './faq-list-page/faq-list-page.component';

const appRoutes: Routes = [
  { path: '', component: FaqListPageComponent },
  { path: 'faqdetail/:id', component: FaqDetailPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewFaqComponent,
    FaqDetailPageComponent,
    FaqListPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ FAQService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
