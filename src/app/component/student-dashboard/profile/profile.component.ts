import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EditProComponent } from '../../edit-pro/edit-pro.component';
import { AddStudentComponent } from '../../add-student/add-student.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  student: any = {
    name: 'Rahul Sharma',
    studentId: 'ST101',
    email: 'rahul@gmail.com',
    mobile: '9876543210',
    course: 'Angular',
    trainer: 'John',
    attendance: '92%',
    city: 'Mumbai',
    profilePhoto: 'https://i.pravatar.cc/150?img=1'
  };

  studentsArr: any[] = [];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openEditProfileForm() {

    const dialogRef = this.dialog.open(
      EditProComponent,
      {
        width: '700px',
        data: this.student
      }
    );

    dialogRef.afterClosed().subscribe(res => {

      if(res){

        this.student = {
          ...res
        };

        this.snackBar.open(
          'Profile Updated Successfully',
          'Close',
          {
            duration: 3000
          }
        );
      }
    });
  }

  openAddStudentForm() {

    const dialogRef = this.dialog.open(
      AddStudentComponent,
      {
        width: '700px'
      }
    );

    dialogRef.afterClosed().subscribe(res => {

      if(res){

        this.studentsArr.push(res);

        this.snackBar.open(
          'Student Added Successfully',
          'Close',
          {
            duration: 3000
          }
        );
      }
    });
  }
}