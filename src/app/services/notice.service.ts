import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Noticeform } from '../models/noticeform.model';


@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  baseUrl = 'http://localhost:8080/notices';

  constructor(private http: HttpClient) { }

  getAll(params): Observable<any> {
    return this.http.get(this.baseUrl, { params });
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: Noticeform): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
