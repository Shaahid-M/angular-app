import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function ContactFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "...");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "first name should be minimum 3 charecters.");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, ContactFormComponent_div_10_div_1_Template, 2, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.control.errors && _r3.control.errors.minlength);
} }
function ContactFormComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const method_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", method_r8.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", method_r8.name, " ");
} }
function ContactFormComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵelement(2, "input", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const method_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", method_r9.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", method_r9.name, " ");
} }
export class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            { id: 1, name: 'Email' },
            { id: 2, name: 'Phone' },
        ];
    }
    log(x) {
        console.log(x);
    }
    submit(x) {
        console.log(x); //x.value
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], decls: 31, vars: 8, consts: [[3, "ngSubmit"], ["f", "ngForm"], ["ngModelGroup", "contact"], ["contact", "ngModelGroup"], [4, "ngIf"], [1, "form-group"], ["for", "firstName"], ["required", "", "minlength", "3", "maxlength", "10", "ngModel", "", "name", "firstName", "id", "firstName", "type", "text", 1, "form-control", 3, "change"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "comment"], ["id", "comment", "ngModel", "", "name", "comment", "cols", "30", "rows", "10", 1, "form-control"], [1, "checkbox"], ["type", "checkbox", "ngModel", "", "name", "isSubscribed"], ["for", "contactMethod"], ["ngModel", "", "name", "contactMethod", "id", "contactMethod", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "radio", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [3, "value"], [1, "radio"], ["ngModel", "", "type", "radio", "name", "contactMethod", 3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r10); const _r0 = i0.ɵɵreference(1); return ctx.submit(_r0); });
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵtemplate(4, ContactFormComponent_div_4_Template, 2, 0, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "label", 6);
        i0.ɵɵtext(7, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 7, 8);
        i0.ɵɵlistener("change", function ContactFormComponent_Template_input_change_8_listener() { i0.ɵɵrestoreView(_r10); const _r3 = i0.ɵɵreference(9); return ctx.log(_r3); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ContactFormComponent_div_10_Template, 2, 1, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 5);
        i0.ɵɵelementStart(12, "label", 10);
        i0.ɵɵtext(13, "Comment");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "textarea", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 12);
        i0.ɵɵelementStart(16, "label");
        i0.ɵɵelement(17, "input", 13);
        i0.ɵɵtext(18, " Subscribe to mailing list ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 5);
        i0.ɵɵelementStart(20, "label", 14);
        i0.ɵɵtext(21, "Contact Method");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "select", 15);
        i0.ɵɵelement(23, "option", 16);
        i0.ɵɵtemplate(24, ContactFormComponent_option_24_Template, 2, 2, "option", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, ContactFormComponent_div_25_Template, 4, 2, "div", 18);
        i0.ɵɵelementStart(26, "p");
        i0.ɵɵtext(27);
        i0.ɵɵpipe(28, "json");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "button", 19);
        i0.ɵɵtext(30, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(9);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !_r1.valid);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", _r3.touched && !_r3.valid);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngForOf", ctx.contactMethods);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.contactMethods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(28, 6, _r0.value), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !_r0.valid);
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i1.NgModelGroup, i2.NgIf, i1.DefaultValueAccessor, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.NgControlStatus, i1.NgModel, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i2.NgForOf, i1.RadioControlValueAccessor], pipes: [i2.JsonPipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{
                selector: 'contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css']
            }]
    }], null, null); })();
//# sourceMappingURL=contact-form.component.js.map