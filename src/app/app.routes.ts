import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'user/:userId',
    component: UserDetailComponent,
  },
];
