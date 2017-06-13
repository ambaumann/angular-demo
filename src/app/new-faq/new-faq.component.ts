import { Component, OnInit } from '@angular/core';
import {FAQItem} from '../faqitem';
import {FAQService} from '../faq.service';

@Component({
  selector: 'app-new-faq',
  templateUrl: './new-faq.component.html',
  styleUrls: ['./new-faq.component.css']
})
export class NewFaqComponent implements OnInit {

  newFAQItem: FAQItem;

  constructor(public faqService: FAQService) {
    this.newFAQItem = new FAQItem();
  }

  ngOnInit() {
  }

  addNewFAQItem(): void {
    this.faqService.addFaqItemWithNewID(this.newFAQItem);
    this.newFAQItem = new FAQItem();
  }



}
