import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2> {{ getTitle() }} </h2>
        <h2 [textContent]="title"> test </h2>

        <ul>
            <li *ngFor="let course of courses"> {{ course }} </li>
        </ul>
        <tr>
            <td [attr.colspan]="title"> </td>
        </tr>
        <button class="btn btn-primary" [class.active]="isActive" >Save</button>
        <!-- [style.backgroundColor]="isActive ? 'blue' : 'white'" -->
        <button (click)="onClick($event)" >Save</button>

        <input (keyup.enter)="onKeyUp($event)" />
            <input #email (keyup.enter)="templateVariables(email.value)" />
        
        Two way binding:<input [(ngModel)]="twoWayBinding" (keyup.enter)="twoWayBinded()">
            <input [value]="twoWayBinding" (keyup.enter)="twoWayBinding = 'test'; twoWayBinded()">

            {{ course.title | lowercase | uppercase}} <br/>
            {{ course.students | number}} <br/>
            {{ course.rating | number:'2.1-2'}} <br/>
            {{ course.price | currency:'USD':true:'3.2-2' }} <br/>
            {{ course.releaseDate | date:'shortDate' }} <br/> <!-- datePipe -->
            {{ course.title | summary:10 }}
    `
})
export class CoursesComponent {
    title = "Not too shabby";
    courses = ["course1", "course2", "course3"];
    isActive = true;
    twoWayBinding = "test@example.com"

    customPipesTxt = "Lorum Ipsum is simply dummy"

    // pipes:
    course = { 
        title: "The complete angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(service: CoursesService) {
//        let service = new CoursesService();
        this.courses = service.getCourses();

    }

    getTitle() {
        return this.title + "Interpolation";
    }

    onClick($event: any) {
        //stop event bubbling when component inside a div and both have onclick events:
        $event.stopPropagation();

        console.log("Button clicked", $event);
    }

    onKeyUp($event: any) {
        console.log("ENTER: " + $event.target.value + " was clicked");
    }

    templateVariables(email: any) {
        console.log(email);
    }

    twoWayBinded() {
        console.log(this.twoWayBinding);
    }
    // logic for calling an HTTP service:
}
