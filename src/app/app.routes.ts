import { Routes } from '@angular/router';
import {ProjectsComponent} from "./customer/projects/projects.component";
import {FindComponent} from "./customer/find/find.component";
import {RouteGuard} from "../Common/RouteGuard";

export const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [RouteGuard],
    children: [
      {path: 'projects', component: ProjectsComponent},
      {path: 'find', component: FindComponent}
    ]
  },
  {
    path: "dashboard",
    component: DashboardLayoutComponent,
    canActivate: [RouteGuard],
    children: [
      {path: 'requests', component: WorkerRequestComponent},
      {path: 'fieldWorkers', component: WorkersComponent}
    ]
  },
  {path:'', component:LandingComponent, pathMatch:'full'},
  {path:'**',component:LoginComponent}
];
