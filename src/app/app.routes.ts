import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: "", redirectTo: "Login", pathMatch: "full" },
    { path: "admin", component: AdminComponent},
    { path: "dashboard", component: DashboardComponent },
    { path: "Login", component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutes {}
