import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { TrainersService } from './trainers.service';
import { EmptyDirective } from './empty.directive'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    EmptyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [TrainersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
