import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RoleGuardService } from './services/role-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [RoleGuardService],
      data: {
        expectedRole: 'Admin'
      }},
      ],
      canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
