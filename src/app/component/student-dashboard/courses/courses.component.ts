import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesArr = [
    {
      courseId: 'C101',
      courseName: 'Angular',
      duration: '3 Months',
      trainer: 'John',
      fees: 15000
    },
    {
      courseId: 'C102',
      courseName: 'React',
      duration: '2 Months',
      trainer: 'Smith',
      fees: 12000
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  onEdit(id: string) {
    console.log('Edit Course', id);
  }

  onDelete(id: string) {
    console.log('Delete Course', id);
  }
}