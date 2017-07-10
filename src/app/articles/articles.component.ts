import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
// import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  // providers: [ ArticleService ]
})
export class ArticlesComponent implements OnInit {
  // allowNewArticle = false;
  articles: Article[] = [
    new Article('This is the title', 'This is the body', Date.now())
  ];
  // articleName = '';

  constructor() { }

  ngOnInit() { }

  onCreateArticle() {
    // this.articles.push(this.articleName);
  }

  onUpdateArticleName(event: Event) {
    // this.articleName = (<HTMLTextAreaElement>event.target).value;
  }
}
