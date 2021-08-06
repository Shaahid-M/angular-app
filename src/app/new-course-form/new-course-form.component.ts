import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
   form; // = new FormGroup({
//     name: new FormControl('', Validators.required),
//     contact: new FormGroup({
//       email: new FormControl(),
//       phone: new FormControl()
//  S   }),
//     topics: new FormArray([])
//   });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
//    console.log(this.form)
  }

  removeTopic($event: any) {
    console.log("hit")

  }

//  removeTopic(topic: any) {
//    console.log("hit")
//    let index = this.topics.controls.indexOf(topic)

//    this.topics.removeAt(0);
//  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
