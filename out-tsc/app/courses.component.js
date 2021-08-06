import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./courses.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "./summary.pipe";
function CoursesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r2, " ");
} }
export class CoursesComponent {
    constructor(service) {
        this.title = "Not too shabby";
        this.courses = ["course1", "course2", "course3"];
        this.isActive = true;
        this.twoWayBinding = "test@example.com";
        this.customPipesTxt = "Lorum Ipsum is simply dummy";
        // pipes:
        this.course = {
            title: "The complete angular course",
            rating: 4.9745,
            students: 30123,
            price: 190.95,
            releaseDate: new Date(2016, 3, 1)
        };
        //        let service = new CoursesService();
        this.courses = service.getCourses();
    }
    getTitle() {
        return this.title + "Interpolation";
    }
    onClick($event) {
        //stop event bubbling when component inside a div and both have onclick events:
        $event.stopPropagation();
        console.log("Button clicked", $event);
    }
    onKeyUp($event) {
        console.log("ENTER: " + $event.target.value + " was clicked");
    }
    templateVariables(email) {
        console.log(email);
    }
    twoWayBinded() {
        console.log(this.twoWayBinding);
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(i0.ɵɵdirectiveInject(i1.CoursesService)); };
CoursesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoursesComponent, selectors: [["courses"]], decls: 36, vars: 34, consts: [[3, "textContent"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary"], [3, "click"], [3, "keyup.enter"], ["email", ""], [3, "ngModel", "ngModelChange", "keyup.enter"], [3, "value", "keyup.enter"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, " test ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ul");
        i0.ɵɵtemplate(5, CoursesComponent_li_5_Template, 2, 1, "li", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "tr");
        i0.ɵɵelement(7, "td");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵtext(9, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵlistener("click", function CoursesComponent_Template_button_click_10_listener($event) { return ctx.onClick($event); });
        i0.ɵɵtext(11, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 4);
        i0.ɵɵlistener("keyup.enter", function CoursesComponent_Template_input_keyup_enter_12_listener($event) { return ctx.onKeyUp($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "input", 4, 5);
        i0.ɵɵlistener("keyup.enter", function CoursesComponent_Template_input_keyup_enter_13_listener() { i0.ɵɵrestoreView(_r3); const _r1 = i0.ɵɵreference(14); return ctx.templateVariables(_r1.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(15, " Two way binding:");
        i0.ɵɵelementStart(16, "input", 6);
        i0.ɵɵlistener("ngModelChange", function CoursesComponent_Template_input_ngModelChange_16_listener($event) { return ctx.twoWayBinding = $event; })("keyup.enter", function CoursesComponent_Template_input_keyup_enter_16_listener() { return ctx.twoWayBinded(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "input", 7);
        i0.ɵɵlistener("keyup.enter", function CoursesComponent_Template_input_keyup_enter_17_listener() { ctx.twoWayBinding = "test"; return ctx.twoWayBinded(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "uppercase");
        i0.ɵɵpipe(20, "lowercase");
        i0.ɵɵelement(21, "br");
        i0.ɵɵtext(22);
        i0.ɵɵpipe(23, "number");
        i0.ɵɵelement(24, "br");
        i0.ɵɵtext(25);
        i0.ɵɵpipe(26, "number");
        i0.ɵɵelement(27, "br");
        i0.ɵɵtext(28);
        i0.ɵɵpipe(29, "currency");
        i0.ɵɵelement(30, "br");
        i0.ɵɵtext(31);
        i0.ɵɵpipe(32, "date");
        i0.ɵɵelement(33, "br");
        i0.ɵɵtext(34);
        i0.ɵɵpipe(35, "summary");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.getTitle(), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("textContent", ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.courses);
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("colspan", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("active", ctx.isActive);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.twoWayBinding);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.twoWayBinding);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 14, i0.ɵɵpipeBind1(20, 16, ctx.course.title)), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 18, ctx.course.students), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(26, 20, ctx.course.rating, "2.1-2"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(29, 23, ctx.course.price, "USD", true, "3.2-2"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(32, 28, ctx.course.releaseDate, "shortDate"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(35, 31, ctx.course.title, 10), " ");
    } }, directives: [i2.NgForOf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], pipes: [i2.UpperCasePipe, i2.LowerCasePipe, i2.DecimalPipe, i2.CurrencyPipe, i2.DatePipe, i4.SummaryPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoursesComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.CoursesService }]; }, null); })();
//# sourceMappingURL=courses.component.js.map