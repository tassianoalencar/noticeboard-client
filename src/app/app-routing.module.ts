import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListNoticeComponent} from './components/list-notice/list-notice.component';
import {DetailsNoticeComponent} from './components/details-notice/details-notice.component';
import {CreateNoticeComponent} from './components/create-notice/create-notice.component';

const routes: Routes = [
  { path: '', redirectTo: '/notices', pathMatch: 'full' },
  { path: 'notices', component: ListNoticeComponent },
  { path: 'notices/create', component: CreateNoticeComponent },
  { path: 'notices/:id', component: DetailsNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
