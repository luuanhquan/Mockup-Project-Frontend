import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'paginations.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationsComponent {

  totalItems: number = 64;
  currentPage: number = 4;
  smallnumPages: number = 0;
  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;
  currentPager: number = 4;

  constructor() {
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}
