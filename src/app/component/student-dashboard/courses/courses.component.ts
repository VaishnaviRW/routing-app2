import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/service/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesArr: any[] = [];

  constructor(
    private courseService: CoursesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog:MatDialog 
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesArr = this.courseService.fetchAllCourses();
  }

  onEdit(courseId: string) {
    this.router.navigate([
      '/student-dashboard',
      'courses',
      courseId,
      'edit'
    ]);
  }

  onDelete(courseId: string) {

    const dialogRef = this.dialog.open(
      ConfirmDialogComponent,
      {
        width: '400px',
        data: {
          message: 'Are you sure you want to delete this course?'
        }
      }
    );
  
    dialogRef.afterClosed().subscribe((res: any) => {
  
      if (res) {
  
        this.courseService.removeCourse(courseId);
  
        this.getAllCourses();
  
        this.snackBar.open(
          'Course Deleted Successfully !!',
          'Close',
          {
            duration: 3000
          }
        );
      }
    });
  }
}