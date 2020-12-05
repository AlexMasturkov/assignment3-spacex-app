import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(
    private http: HttpClient,
  ) { }

  get(endpoint: string) {    
    return this.http.get(`https://api.spacexdata.com/v4/${endpoint}`);
  } 

}
