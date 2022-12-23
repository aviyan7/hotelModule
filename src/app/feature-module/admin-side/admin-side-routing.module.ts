import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSideComponent } from './admin-side.component';
import { PasswordComponent } from './password/password.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AdminSideComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home Page Content' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard Details Content' },
      },
    //   {
    //     path:'contact-us',
    //     loadChildren:()=>
    //     import('./footor-contact-us/footorcontactus.module').then((m)=>m.FootorcontactusModule)
    //   },
    //   {
    //     path: 'email',
    //     loadChildren: () =>
    //       import('./email/email.module').then((m) => m.EmailModule),
    //   },
      {
        path: 'room',
        loadChildren: () =>
        import('./room/room.module').then((m) => m.RoomModule)
      },
      {
        path: 'password',
        component: PasswordComponent,
        data: { title: 'Update Password' },
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSideRoutingModule {}
