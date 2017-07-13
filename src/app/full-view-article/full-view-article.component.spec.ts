import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullViewArticleComponent } from './full-view-article.component';

describe('FullViewArticleComponent', () => {
  let component: FullViewArticleComponent;
  let fixture: ComponentFixture<FullViewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullViewArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
