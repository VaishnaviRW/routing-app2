import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-attendance-dialog',
  templateUrl: './attendance-dialog.component.html',
  styleUrls: ['./attendance-dialog.component.scss']
})
export class AttendanceDialogComponent {

  attendanceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });

  constructor(
    private dialogRef: MatDialogRef<AttendanceDialogComponent>
  ) { }

  onSubmit() {

    if (this.attendanceForm.valid) {
      this.dialogRef.close(this.attendanceForm.value);
    }
  }
}