import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from './article.model';
import { ArticlesService } from '../articles.service';
import { FilterArticlesService } from '../filter-articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  // providers: [ ArticleService ]
})
export class ArticlesComponent implements OnInit {
  articles: any = [];
  query: string;

  constructor(private articlesService: ArticlesService,
              private filterArticlesService: FilterArticlesService) { }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe(articles => {
      this.articles = articles;
    });
    this.filterArticlesService.getQuery().subscribe(query => {
      this.query = query.text;
    });
  }
}
