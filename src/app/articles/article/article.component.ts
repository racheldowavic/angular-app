import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  status = 'alive';
  @Input() article: Article;

  getTitle() {
    return this.article.title;
  }

  constructor() {
    this.status = Math.random() > 0.5 ? 'dead' : 'alive';
  }

  getColor() {
    return (this.status === 'dead') ? 'red' : 'green';
  }

  ngOnInit() { }

}
