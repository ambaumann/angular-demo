import { TestBed, inject } from '@angular/core/testing';

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
});
