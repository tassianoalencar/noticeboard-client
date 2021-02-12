import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoticeComponent } from './components/create-notice/create-notice.component';
import { DetailsNoticeComponent } from './components/details-notice/details-notice.component';
import { ListNoticeComponent } from './components/list-notice/list-notice.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoticeComponent,
    DetailsNoticeComponent,
    ListNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
