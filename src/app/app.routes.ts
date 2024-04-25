import { Routes } from '@angular/router';
import {WorkerRequestComponent} from "./Admin/worker-request/worker-request.component";
import {WorkersComponent} from "./Admin/workers/workers.component";
import {UsersComponent} from "./Admin/users/users.component";
import {RouteGuard} from "../Common/RouteGuard";
import {ComplaintComponent} from "./complaint/complaint.component";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';


export const routes: Routes = [
  {
    path:'auth',
    component: AuthLayoutComponent,
    children: [
      {path:'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      // {path: 'OTP-Verification', component:OTPVerificationComponent}
    ]
  },
      {
        path: "dashboard",
        component: DashboardLayoutComponent,
        //canActivate: [RouteGuard],
        children: [
          {path: 'requests', component: WorkerRequestComponent},
          {path: 'fieldWorkers', component: WorkersComponent},
          {path: 'users', component: UsersComponent},
          {path: 'complaint', component: ComplaintComponent}
        ]
      },
  
      {path:'', component:LandingComponent, pathMatch:'full'},
      {path:'**',component:LoginComponent}
];
