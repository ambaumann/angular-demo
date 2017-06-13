import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListPageComponent } from './faq-list-page.component';

describe('FaqListPageComponent', () => {
  let component: FaqListPageComponent;
  let fixture: ComponentFixture<FaqListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
