import { Injectable } from '@angular/core';
import { AuthorDetail } from './Author-delail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailService {

  constructor(private http : HttpClient) { }

  readonly baseURL = 'http://localhost:8000/api/Authors';
  formData:AuthorDetail= new AuthorDetail();
  list : AuthorDetail[];


  postAuthorDetail(){
   return this.http.post(this.baseURL,this.formData); 
  }
  putAuthorDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.Id}`,this.formData); 
   }
   deleteAuthorDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`) ; 
   }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as AuthorDetail[]);
  }
}
