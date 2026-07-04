import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesArr = [
    {
      courseId: 'c1',
      courseName: 'Angular',
      duration: '3 Months',
      trainer: 'John',
      fees: 15000
    },
    {
      courseId: 'c2',
      courseName: 'React',
      duration: '2 Months',
      trainer: 'David',
      fees: 12000
    },
    {
      courseId: 'c3',
      courseName: 'Node JS',
      duration: '2.5 Months',
      trainer: 'Mark',
      fees: 18000
    }
  ];

  constructor(
    private snackBar: MatSnackBar,
  private dialog: MatDialog
  ) { }

  fetchAllCourses() {
    return this.coursesArr;
  }

  getCourse(courseId: string) {
    return this.coursesArr.find(
      course => course.courseId === courseId
    );
  }

  updateCourse(updatedCourse: any) {
    const index = this.coursesArr.findIndex(
      course => course.courseId === updatedCourse.courseId
    );

    if (index !== -1) {
      this.coursesArr[index] = {
        ...updatedCourse
      };
    }

    console.log('Updated Courses => ', this.coursesArr);
  }

  removeCourse(courseId: string) {
    this.coursesArr = this.coursesArr.filter(
      course => course.courseId !== courseId
    );
  }
}