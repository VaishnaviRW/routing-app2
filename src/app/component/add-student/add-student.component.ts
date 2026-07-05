import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {

  studentForm = new FormGroup({

    profilePhoto: new FormControl('', Validators.required),

    name: new FormControl('', Validators.required),

    studentId: new FormControl('', Validators.required),

    email: new FormControl('', Validators.required),

    mobile: new FormControl('', Validators.required),

    course: new FormControl('', Validators.required),

    trainer: new FormControl('', Validators.required),

    city: new FormControl('', Validators.required)

  });

  constructor(
    private dialogRef: MatDialogRef<AddStudentComponent>
  ) {}

  onAddStudent() {

    if(this.studentForm.valid){

      this.dialogRef.close(
        this.studentForm.value
      );
    }
  }
}