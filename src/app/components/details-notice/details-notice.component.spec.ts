import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNoticeComponent } from './details-notice.component';

describe('DetailsNoticeComponent', () => {
  let component: DetailsNoticeComponent;
  let fixture: ComponentFixture<DetailsNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
