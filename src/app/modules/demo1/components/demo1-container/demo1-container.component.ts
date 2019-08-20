import { Component, OnInit } from '@angular/core';
import { Demo1Service } from '../../services/demo1.service';
import { Post } from '../../models';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loading } from 'src/app/core';
import { selectLoading } from 'src/app/core';
import { loadPosts } from '../../actions';
import { Demo1State, getPosts } from '../../reducers';

@Component({
  selector: 'app-demo1-container',
  templateUrl: './demo1-container.component.html',
  styleUrls: ['./demo1-container.component.css']
})
export class Demo1ContainerComponent implements OnInit {
  posts: Observable<Post[]> = of([]);
  loading$: Observable<boolean>;
  
  constructor(private store: Store<{ loading: boolean } | Demo1State>) {
  }

  ngOnInit() {
    this.store.dispatch(loading());
    this.loading$ = this.store.pipe(select(selectLoading));
    this.store.dispatch(loadPosts());
    this.posts = this.store.pipe(select(getPosts));
  }
}
