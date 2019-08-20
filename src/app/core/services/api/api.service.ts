import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string = environment.apiUrl;
  private getUrl = (url: string): string => this.baseUrl + url;

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.getUrl(url));
  }

  post<T>(url: string, body: T): Observable<HttpResponse | T | Partial<T> | any> {
    return this.http.post<HttpResponse | T | Partial<T> | any>(this.getUrl(url), body);
  }

  delete(url: string): Observable<HttpResponse> {
    return this.http.delete<HttpResponse>(this.getUrl(url));
  }

  put<T>(url: string, body: T): Observable<HttpResponse | T | Partial<T> | any> {
    return this.http.put<HttpResponse | T | Partial<T> | any>(this.getUrl(url), body);
  }
}

export interface HttpResponse {
  status: string;
  data: any;
  code: number;
}
