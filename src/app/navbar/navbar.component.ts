import { Component } from '@angular/core';
import { FilterArticlesService } from '../filter-articles.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed: boolean = true;
  constructor(private filterArticlesService: FilterArticlesService) { }

  sendQuery(event: any): void {
    this.filterArticlesService.sendQuery(event.target.value);
  }
}
