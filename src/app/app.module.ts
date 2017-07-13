import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { AboutComponent } from './about/about.component';
import { ArticlesService } from './articles.service';
import { ColourService } from './colour.service';
import { FilterArticlesService } from './filter-articles.service';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { MathJaxDirective } from './math-jax.directive';
import { FullViewArticleComponent } from './full-view-article/full-view-article.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

const appRoutes: Routes = [{ path: 'about', component: AboutComponent },
                           { path: '', component: ArticlesComponent },
                           { path: 'articles/:id', component: FullViewArticleComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    ArticleComponent,
    AboutComponent,
    MyFilterPipePipe,
    MathJaxDirective,
    FullViewArticleComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MomentModule,
    BrowserAnimationsModule
  ],
  providers: [ArticlesService, FilterArticlesService, ColourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
