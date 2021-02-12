import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice } from 'src/app/models/notice.model';
import { Noticeform } from 'src/app/models/noticeform.model';
import {NoticeService} from '../../services/notice.service';

@Component({
  selector: 'app-edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.scss']
})
export class EditNoticeComponent implements OnInit {

  constructor(
    private noticeService: NoticeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  notice: Notice;

  ngOnInit(): void {
    this.getNotice();
  }

  onSubmit(): void {
    this.noticeService.update(this.route.snapshot.params.id, this.notice).subscribe(result => this.gotoNoticeList());
  }

  gotoNoticeList(): void {
    this.router.navigate(['/notices']);
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
