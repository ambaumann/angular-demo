import { Injectable } from '@angular/core';
import {FAQItem} from "./faqitem";

@Injectable()
export class FAQService {

  faqList: Array<FAQItem>;

  constructor() { 
    this.faqList = [
      new FAQItem('5344c1be-5045-11e7-b965-c85b76cdaa7b', 'My first FAQ', 'I can put HTML here!'),
      new FAQItem('5344c1be-5045-11e7-b965-c85b76cdaa7c', 'My second FAQ', 'I can put HTML here!'),
      new FAQItem('5344c1be-5045-11e7-b965-c85b76cdaa7d', 'My third FAQ', 'I can put HTML here!'),
      new FAQItem('5344c1be-5045-11e7-b965-c85b76cdaa7e', 'My fourth FAQ', 'I can put HTML here!'),
    ];
  }

  getItems(): Array<FAQItem> {
    return this.faqList;
  }

}