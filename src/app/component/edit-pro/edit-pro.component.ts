import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.scss']
})
export class EditProComponent implements OnInit {

  profileForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditProComponent>
  ) { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      studentId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      trainer: new FormControl('', Validators.required),
      attendance: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    });

    this.profileForm.patchValue(this.data);
  }

  onUpdate() {
    if (this.profileForm.valid) {
      this.dialogRef.close(this.profileForm.value);
    }
  }
}