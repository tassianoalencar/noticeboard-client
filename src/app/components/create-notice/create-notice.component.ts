import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../../services/notice.service';
import {Noticeform} from '../../models/noticeform.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent implements OnInit {
  notice: Noticeform;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticeService: NoticeService) {
    this.notice = new Noticeform();
  }

  onSubmit(): void {
    this.noticeService.create(this.notice).subscribe(result => this.gotoNoticeList());
  }

  gotoNoticeList(): void {
    this.router.navigate(['/notices']);
  }

  ngOnInit(): void {
  }
}
