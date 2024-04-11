import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ressource } from '../models/ressource';
import { Options } from '../models/options';



@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseUrl = 'http://localhost:9000/pidev/ress'; 

  constructor(private http: HttpClient) { }

  
  getAllRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}/getall`);
  }


  getResourcesByOption(option: Options): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.baseUrl}/${option}`);
  }
  // getResourcesByCategorie(categorie: Categorie, option: Options): Observable<Ressource[]> {
  //   return this.http.get<Ressource[]>(`${this.baseUrl}/${categorie}/${option}`);
  // }


  
  
}
