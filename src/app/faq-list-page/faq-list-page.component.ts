import { Component, OnInit } from '@angular/core';
import { FAQService } from '../faq.service';


@Component({
  selector: 'app-faq-list-page',
  templateUrl: './faq-list-page.component.html',
  styleUrls: ['./faq-list-page.component.css']
})
export class FaqListPageComponent implements OnInit {

  constructor(public faqService: FAQService) { }

  ngOnInit() {
  }

}
