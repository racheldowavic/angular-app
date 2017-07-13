import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article.model';
import { ArticlesService } from '../../articles.service';
import { ColourService } from '../../colour.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  colour: String;
  inArabic: boolean = false;

  arabic(string) {
    const arabic = /[\u0600-\u06FF]/;
    return arabic.test(string);
  }

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute,
              private colourService: ColourService) { }

  ngOnInit() {
    this.colour = this.colourService.getNextColour();
    this.inArabic = this.arabic(this.article.title);
  }
}
