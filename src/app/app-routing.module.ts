import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { AttendanceComponent } from './component/student-dashboard/attendance/attendance.component';
import { CoursesComponent } from './component/student-dashboard/courses/courses.component';
import { ProfileComponent } from './component/student-dashboard/profile/profile.component';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'attendance',
        component: AttendanceComponent
      },
      {
        path: 'courses/:courseId/edit',
        component: EditComponent
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: 'student-dashboard',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'student-dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }