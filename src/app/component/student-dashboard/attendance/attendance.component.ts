import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceDialogComponent } from './attendance-dialog/attendance-dialog.component';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

  attendanceArr: any[] = [];

  constructor(private dialog: MatDialog) {}

  openAttendanceDialog() {

    const dialogRef = this.dialog.open(
      AttendanceDialogComponent,
      {
        width: '450px'
      }
    );

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.attendanceArr.push(res);
      }
    });
  }
}