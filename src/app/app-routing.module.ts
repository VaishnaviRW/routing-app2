import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { AttendanceComponent } from './component/student-dashboard/attendance/attendance.component';
import { CoursesComponent } from './component/student-dashboard/courses/courses.component';
import { ProfileComponent } from './component/student-dashboard/profile/profile.component';



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
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}