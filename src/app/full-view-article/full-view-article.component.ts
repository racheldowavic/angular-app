import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../articles/article.model';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-view-article',
  templateUrl: './full-view-article.component.html',
  styleUrls: ['./full-view-article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FullViewArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.articlesService.getArticle(this.route.snapshot.params['id']).subscribe(article => {
      this.article = article;
    });
  }

}
