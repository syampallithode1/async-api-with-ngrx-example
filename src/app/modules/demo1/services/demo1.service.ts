import { Injectable } from '@angular/core';
import { Post } from './../models';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './../../../core/services/api/api.service';

@Injectable()
export class Demo1Service {

  constructor(private apiService: ApiService) { 
  }

  getPosts(): Observable<Post[]> {
    return this.apiService.get<Post[]>('posts');
  }
}
