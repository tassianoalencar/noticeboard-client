import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Notice} from '../../models/notice.model';
import {NoticeService} from '../../services/notice.service';

@Component({
  selector: 'app-list-notice',
  templateUrl: './list-notice.component.html',
  styleUrls: ['./list-notice.component.scss']
})
export class ListNoticeComponent implements OnInit {
  notices: any;
  currentNotice = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [3, 6, 9];

  constructor(
    private noticeService: NoticeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveNotices();
  }

  retrieveNotices(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.noticeService.getAll(params)
      .subscribe(
        response => {
          const { content, totalElements } = response;
          this.notices = content;
          this.count = totalElements;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveNotices();
    this.currentNotice = undefined;
    this.currentIndex = -1;
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveNotices();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveNotices();
  }

  getRequestParams(searchTitle, page, pageSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  setActiveNotice(notice, index): void {

  }

  editNotice() {
    this.router.navigate(['/notices/1']);
  }

  deleteNotice(id) {
    this.noticeService.delete(id)
    .subscribe(
      response => {
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }
}
