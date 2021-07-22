import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Birth } from "../models/birth.model";
import { ServerResponse } from "../models/server-response.model";

const api = `${environment.apiUrl}/birth`; 

// const api= 'http://localhost:4000';
const getBirth= api+'/birth/details';
const createBirth=api+'/birth/add';
const editBirth =api +'/birth/edit';
const deleteBirth=api+'/birth/delete';
const getAll=api+'/birth/getAll'
@Injectable({
    providedIn:'root'
})
export class BirthService{
    constructor(
        private http: HttpClient){}
        GetBirth() {
            return this.http.get(getAll);
          }
    findBirth(id:string):Observable<ServerResponse<Birth>>{
        return this.http.get<ServerResponse<Birth>>(getBirth+id);

    }
    postBirth(payload: Birth):Observable<Birth[]>{
        return this.http.post<Birth[]>(createBirth,payload)
    }
    putBirth(id:string,payload:Birth):Observable<Birth[]>{
        return this.http.put<Birth[]>(editBirth+id,payload);

    }
    deletBirth(id:string):Observable<Birth>{
        return this.http.delete<Birth>(deleteBirth+id);
    }


        
}