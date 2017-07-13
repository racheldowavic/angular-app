import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }

  getAllArticles() {
    return this.http.get('/api/articles')
    .map(res => res.json());
  }
  getArticle(id: string) {
    return this.http.get('/api/articles/' + id)
    .map(res => res.json());
  }
}
