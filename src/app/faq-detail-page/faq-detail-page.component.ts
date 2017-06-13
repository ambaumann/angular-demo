import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FAQItem } from 'app/faqitem';
import { FAQService } from 'app/faq.service';


@Component({
  selector: 'app-faq-detail-page',
  templateUrl: './faq-detail-page.component.html',
  styleUrls: ['./faq-detail-page.component.css']
})
export class FaqDetailPageComponent implements OnInit {

  public item: FAQItem;

  constructor(public faqService: FAQService) {

   }

  ngOnInit() {
  }

}
