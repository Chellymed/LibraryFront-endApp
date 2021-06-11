import { Injectable } from '@angular/core';
import { BookTypeDetail } from './booktype-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookTypeDetailService {

  constructor(private http : HttpClient) { }

  readonly baseURL = 'http://localhost:8000/api/BookTypes';
  formData:BookTypeDetail= new BookTypeDetail();
  list : BookTypeDetail[];


  postBookTypeDetail(){
   return this.http.post(this.baseURL,this.formData); 
  }
  putBookTypeDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.Id}`,this.formData); 
   }
   deleteBookTypeDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`) ; 
   }

  refreshTypeList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as BookTypeDetail[]);
  }
}
