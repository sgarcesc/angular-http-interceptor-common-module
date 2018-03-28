import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JsonplaceholderService {
  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(success => {
        console.log('success from service');
      });
  }
}
