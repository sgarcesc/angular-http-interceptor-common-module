import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.html',
  styleUrls: ['./tour-of-heroes.component.css']
})
export class TourOfHeroesComponent implements OnInit {
  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  ngOnInit() {
  }

  public getUsers(): void {
    this.jsonplaceholderService.getUsers();
  }
}
