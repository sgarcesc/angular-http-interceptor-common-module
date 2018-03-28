import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';
import { MyHttpInterceptor } from './interceptors/my-http.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TourOfHeroesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
