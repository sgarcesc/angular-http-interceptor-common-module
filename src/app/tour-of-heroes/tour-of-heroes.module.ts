import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { JsonplaceholderService } from './services/jsonplaceholder.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [TourOfHeroesComponent],
  exports: [TourOfHeroesComponent],
  providers: [JsonplaceholderService]
})
export class TourOfHeroesModule {
 }
