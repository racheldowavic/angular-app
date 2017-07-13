import { TestBed, inject } from '@angular/core/testing';

import { FilterArticlesService } from './filter-articles.service';

describe('FilterArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterArticlesService]
    });
  });

  it('should be created', inject([FilterArticlesService], (service: FilterArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
