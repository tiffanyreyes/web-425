/**
 * Title: home.component.ts
 * Author: Tiffany Reyes
 * Date: 11 Sept 2023
 * Description: home component
 */

// importing classes and modules
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // declaring class properties
  selectableGrades: Array<string> = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({ course: ['', Validators.required], grade: ['', Validators.required]});
  }

  // function for saving, calculating, clearing
  onSubmit(event) {
    this.transcriptEntries.push({ course: this.form.course.value, grade: this.form.grade.value });
    event.currentTarget.reset();
  }

  calculateResults() {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A': gpa += 4.00;
          break;
        case 'A-': gpa += 3.70;
          break;
        case 'B+': gpa += 3.33;
          break;
        case 'B': gpa += 3.00;
          break;
        case 'B-': gpa += 2.70;
          break;
        case 'C+': gpa += 2.30;
          break;
        case 'C': gpa += 2.00;
          break;
        case 'C-': gpa += 1.70;
          break;
        case 'D+': gpa += 1.30;
          break;
        case 'D': gpa += 1.00;
          break;
        case 'D-': gpa += 0.70;
          break;
        default: gpa += 0.00;
          break;

      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
  get form() {
    return this.transcriptForm.controls;
  }
}
