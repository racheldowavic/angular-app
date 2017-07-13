import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterArticlesService {
  private subject = new Subject<any>();

  sendQuery(query: string) {
    this.subject.next({ text: query });
  }

  clearQuery() {
    this.subject.next();
  }

  getQuery(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }

}
