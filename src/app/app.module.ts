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
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,

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