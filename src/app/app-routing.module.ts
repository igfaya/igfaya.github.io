import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {RequestPasswordResetComponent} from "./request-password-reset/request-password-reset.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileListComponent} from "./profile-list/profile-list.component";
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {BlogGridComponent} from "./blog-grid/blog-grid.component";
import {BlogDetailsComponent} from "./blog-details/blog-details.component";

const routes: Routes = [
  {
    path:  '',
    component: HomeComponent
  },
  {
    path:  'blog',
    component: BlogGridComponent
  },
  {
    path:  'article',
    component: BlogDetailsComponent
  },
  {
    path: 'create-account',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'request-password-reset',
    component: RequestPasswordResetComponent
  },
  {
    path: 'dashboard',
    component: ProfileComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
