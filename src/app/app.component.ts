import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular hello-world';
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];
  task = {
    title: 'Review applications',
    assignee: {
      name: 'Safe Traversal Operator'
    }
  }
  viewMode = 'map';

  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs) {
    console.log('changed' , eventArgs);
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' })
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);

    this.courses.splice(index, 1);
  }
  onChange(course: any) {
    course.name = "UPDATED";
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index: any, course: any) {
    return (course ? course.id : undefined);
  }

}
