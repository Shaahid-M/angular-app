import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function NewCourseFormComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topic_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", topic_r3.value, " ");
} }
function NewCourseFormComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("click", function NewCourseFormComponent_li_14_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const topic_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.removeTopic(topic_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topic_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", topic_r4.value, " ");
} }
export class NewCourseFormComponent {
    //     name: new FormControl('', Validators.required),
    //     contact: new FormGroup({
    //       email: new FormControl(),
    //       phone: new FormControl()
    //  S   }),
    //     topics: new FormArray([])
    //   });
    constructor(fb) {
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: []
            }),
            topics: fb.array([])
        });
    }
    addTopic(topic) {
        this.topics.push(new FormControl(topic.value));
        //    console.log(this.form)
    }
    removeTopic($event) {
        console.log("hit");
    }
    //  removeTopic(topic: any) {
    //    console.log("hit")
    //    let index = this.topics.controls.indexOf(topic)
    //    this.topics.removeAt(0);
    //  }
    get topics() {
        return this.form.get('topics');
    }
}
NewCourseFormComponent.ɵfac = function NewCourseFormComponent_Factory(t) { return new (t || NewCourseFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
NewCourseFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewCourseFormComponent, selectors: [["new-course-form"]], decls: 15, vars: 3, consts: [[3, "formGroup"], ["formControlName", "name", "type", "text"], ["formGroupName", "contact"], ["formControlName", "email", "type", "text"], ["formControlName", "phone", "type", "text"], [4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", 3, "click", "keyup.enter"], ["topic", ""], [1, "list-group"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function NewCourseFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵtext(1, " name:");
        i0.ɵɵelement(2, "input", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4, " email:");
        i0.ɵɵelement(5, "input", 3);
        i0.ɵɵtext(6, " phone:");
        i0.ɵɵelement(7, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "ul");
        i0.ɵɵtemplate(9, NewCourseFormComponent_li_9_Template, 2, 1, "li", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "form");
        i0.ɵɵelementStart(11, "input", 6, 7);
        i0.ɵɵlistener("click", function NewCourseFormComponent_Template_input_click_11_listener($event) { return ctx.removeTopic($event); })("keyup.enter", function NewCourseFormComponent_Template_input_keyup_enter_11_listener() { i0.ɵɵrestoreView(_r7); const _r1 = i0.ɵɵreference(12); return ctx.addTopic(_r1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "ul", 8);
        i0.ɵɵtemplate(14, NewCourseFormComponent_li_14_Template, 2, 1, "li", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.topics.controls);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.topics.controls);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.FormGroupName, i2.NgForOf, i1.NgForm], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewCourseFormComponent, [{
        type: Component,
        args: [{
                selector: 'new-course-form',
                templateUrl: './new-course-form.component.html',
                styleUrls: ['./new-course-form.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=new-course-form.component.js.map