import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from 'src/app/service/course.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  courseId!: string;

  courseForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.createForm();

    this.courseId =
      this.route.snapshot.paramMap.get('courseId') || '';

    const course =
      this.courseService.getCourse(this.courseId);

    if (course) {
      this.courseForm.patchValue(course);
    }
  }

  createForm() {
    this.courseForm = new FormGroup({
      courseId: new FormControl(''),
      courseName: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      trainer: new FormControl('', Validators.required),
      fees: new FormControl('', Validators.required)
    });
  }

  

  onUpdate() {

    if (this.courseForm.valid) {

      this.courseService.updateCourse(
        this.courseForm.value
      );

      this.snackBar.open(
        'Course Updated Successfully !!',
        'Close',
        {
          duration: 3000
        }
      );

      this.router.navigate([
        '/student-dashboard/courses'
      ]);
    }
  }
}

