import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice } from 'src/app/models/notice.model';
import {NoticeService} from '../../services/notice.service';

@Component({
  selector: 'app-details-notice',
  templateUrl: './details-notice.component.html',
  styleUrls: ['./details-notice.component.scss']
})
export class DetailsNoticeComponent implements OnInit {

  constructor(
    private noticeService: NoticeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  notice: Notice;

  ngOnInit(): void {
    this.getNotice();
  }

  getNotice() {
    this.noticeService.get(this.route.snapshot.params.id)
    .subscribe(
      response => {
        this.notice = response;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
