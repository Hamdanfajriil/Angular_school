import { Routes } from '@angular/router';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';
import { AdminComponent } from './template/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: PortofolioWebComponent
  },
  {
    path: '',
    component: AdminComponent
  }
];
