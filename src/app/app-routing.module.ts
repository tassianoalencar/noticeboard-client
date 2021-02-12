import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListNoticeComponent} from './components/list-notice/list-notice.component';
import {DetailsNoticeComponent} from './components/details-notice/details-notice.component';
import {CreateNoticeComponent} from './components/create-notice/create-notice.component';
import { EditNoticeComponent } from './components/edit-notice/edit-notice.component';

const routes: Routes = [
  { path: '', redirectTo: '/notices', pathMatch: 'full' },
  { path: 'notices', component: ListNoticeComponent },
  { path: 'notices/create', component: CreateNoticeComponent },
  { path: 'notices/detail/:id', component: DetailsNoticeComponent },
  { path: 'notices/edit/:id', component: EditNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
