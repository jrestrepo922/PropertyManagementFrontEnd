import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatePropertyDTO } from '../models/property/createPropertyDTO';
import { GetPropertiesDTO } from '../models/property/getPropertiesDTO';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseUrlBackEnd = 'http://localhost:8080/users'; 
  private baseUrlFrontEnd= "users"
  


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
     private http: HttpClient, 
     private router: Router
   ) { }

   getProperties(id: number): Observable<GetPropertiesDTO[]>{
    let backEndUrl = this.baseUrlBackEnd + `/${id}/properties`
    return this.http.get<GetPropertiesDTO[]>(backEndUrl); 

   }

   createProperty(id: number, createPropertyDTO: CreatePropertyDTO){
    let backEndUrl = this.baseUrlBackEnd + `/${id}/properties`; 
    return this.http.post(backEndUrl, createPropertyDTO, this.httpOptions); 
   }


}
