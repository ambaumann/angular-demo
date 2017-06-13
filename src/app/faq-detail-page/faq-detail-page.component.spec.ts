import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDetailPageComponent } from './faq-detail-page.component';

describe('FaqDetailPageComponent', () => {
  let component: FaqDetailPageComponent;
  let fixture: ComponentFixture<FaqDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
