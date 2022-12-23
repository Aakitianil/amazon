import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlipkartlistComponent } from './flipkartlist/flipkartlist.component';
import { FlipkartchaildComponent } from './flipkartchaild/flipkartchaild.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ErrorStyleDirective } from './error-style.directive';
import { KothaComponent } from './kotha/kotha.component';
import { WifeHusbendComponent } from './wife-husbend/wife-husbend.component';
import { FightingComponent } from './fighting/fighting.component';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FlipkartlistComponent,
    FlipkartchaildComponent,
    ObservablesComponent,
    TimetableComponent,
    ErrorStyleDirective,
    KothaComponent,
    WifeHusbendComponent,
    FightingComponent,
  
   
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi: true
      

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
