import { Routes } from '@angular/router';
import {WorkerRequestComponent} from "./Admin/worker-request/worker-request.component";
import {WorkersComponent} from "./Admin/workers/workers.component";
import {UsersComponent} from "./Admin/users/users.component";
import {RouteGuard} from "../Common/RouteGuard";
import {ComplaintComponent} from "./complaint/complaint.component";
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";


export const routes: Routes = [
      {
        path: "dashboard",
        component: DashboardLayoutComponent,
        canActivate: [RouteGuard],
        children: [
          {path: 'requests', component: WorkerRequestComponent},
          {path: 'fieldWorkers', component: WorkersComponent},
          {path: 'users', component: UsersComponent},
          {path: 'complaint', component: ComplaintComponent}
        ]
      }
];
