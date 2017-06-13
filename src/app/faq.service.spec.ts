import { TestBed, inject } from '@angular/core/testing';
import {FAQItem} from './faqitem';
import { FAQService } from './faq.service';


describe('FAQService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FAQService]
    });
  });

  it('should be created', inject([FAQService], (service: FAQService) => {
    expect(service).toBeTruthy();
  }));

  it('should append an item to the FAQ list when we call addItem with a valid FAQItem', inject([FAQService], (underTest: FAQService) => {
    const newItem = new FAQItem('a', 'title', 'body');
    underTest.addFaqItemWithNewID(newItem);
    expect(underTest.faqList[underTest.faqList.length - 1] === newItem).toBeTruthy(true);
  }));

  it('should remove selected item by ID', inject([FAQService], (underTest: FAQService) => {
    underTest.removeFaqItem('5344c1be-5045-11e7-b965-c85b76cdaa7d');
    expect(underTest.faqList.length === 3).toBeTruthy();
    expect(underTest
             .faqList
             .filter(item => item.id === '5344c1be-5045-11e7-b965-c85b76cdaa7d')
             .length === 0).toBeTruthy();
  }));

  it('should return the requested FAQ item by ID', inject([FAQService], (underTest: FAQService) => {
    expect(underTest
            .getItemByID('5344c1be-5045-11e7-b965-c85b76cdaa7d')
            .title === 'My third FAQ')
            .toBeTruthy();
  }));
});
