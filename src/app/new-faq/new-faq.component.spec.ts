import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFaqComponent } from './new-faq.component';
import { FormsModule } from '@angular/forms';
import { FAQService } from '../faq.service';


describe('NewFaqComponent', () => {
  let component: NewFaqComponent;
  let fixture: ComponentFixture<NewFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFaqComponent ],
      imports: [ FormsModule ],
      providers: [ FAQService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
