import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  studentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.studentForm.value);
  }
}