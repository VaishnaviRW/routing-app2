import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { HomeDashboardComponent } from './component/home-dashboard/home-dashboard.component';
import { UsersDashboardComponent } from './component/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from './component/products-dashboard/products-dashboard.component';
import { FairsDashboardComponent } from './component/fairs-dashboard/fairs-dashboard.component';

import { GetConfirmComponent } from './component/get-confirm/get-confirm.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

// Student Dashboard Components
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './component/student-dashboard/profile/profile.component';
import { CoursesComponent } from './component/student-dashboard/courses/courses.component';
import { AttendanceComponent } from './component/student-dashboard/attendance/attendance.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EditComponent } from './component/edit/edit.component';



import { MatSelectModule } from '@angular/material/select';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { AttendanceDialogComponent } from './component/student-dashboard/attendance/attendance-dialog/attendance-dialog.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { EditProComponent } from './component/edit-pro/edit-pro.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    UsersDashboardComponent,
    ProductsDashboardComponent,
    FairsDashboardComponent,
    NavbarComponent,

    
    GetConfirmComponent,
    PageNotFoundComponent,
    StudentDashboardComponent,
    ProfileComponent,
    CoursesComponent,
    AttendanceComponent,
    EditComponent,
    ConfirmDialogComponent,
    AttendanceDialogComponent,
    AddStudentComponent,
    AddStudentComponent,
    EditProComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule ,
    MatSelectModule ,
    MatIconModule,

    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }