import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function SignupFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, " The username or password is invalid. ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking for uniqueness...");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Username is required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Minimum ", ctx_r4.username, " charecters");
} }
function SignupFormComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Cannot contain spaces");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Username is taken");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, SignupFormComponent_div_8_div_1_Template, 2, 0, "div", 6);
    i0.ɵɵtemplate(2, SignupFormComponent_div_8_div_2_Template, 2, 1, "div", 6);
    i0.ɵɵtemplate(3, SignupFormComponent_div_8_div_3_Template, 2, 0, "div", 6);
    i0.ɵɵtemplate(4, SignupFormComponent_div_8_div_4_Template, 2, 0, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.validateUsername(ctx_r2.form.get("account.username"), "required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.validateUsername(ctx_r2.form.get("account.username"), "minlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.validateUsername(ctx_r2.form.get("account.username"), "whitespace"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.validateUsername(ctx_r2.form.get("account.username"), "shouldBeUnique"));
} }
export class SignupFormComponent {
    constructor() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace
                ], 
                //async validators:
                UsernameValidators.shouldBeUnique),
                password: new FormControl('', Validators.required)
            })
        });
    }
    login() {
        this.form.setErrors({
            invalidLogin: true
        });
    }
    log(x) {
        console.log(x);
    }
    get username() {
        return this.form.get('account.username');
    }
    validateUsername(x, errorCode) {
        //console.log(x.touched);
        if (errorCode === "default")
            return (x.touched && x.invalid);
        else if (errorCode === "pending")
            return (x.pending);
        else if (errorCode === 'required')
            return (x.errors.required ? true : false);
        else if (errorCode === 'minlength')
            return (x.errors.minlength ? true : false);
        else if (errorCode === 'whitespace')
            return (x.errors.cannotContainSpace ? true : false);
        else if (errorCode === 'shouldBeUnique')
            return (x.errors.shouldBeUnique);
        return false;
    }
}
SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(); };
SignupFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupFormComponent, selectors: [["signup-form"]], decls: 15, vars: 4, consts: [[3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], ["formGroupName", "account"], [1, "form-group"], ["for", "username"], ["formControlName", "username", "id", "username", "type", "text", 1, "form-control", 3, "change"], [4, "ngIf"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        i0.ɵɵtemplate(1, SignupFormComponent_div_1_Template, 2, 0, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "label", 4);
        i0.ɵɵtext(5, "Username");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "input", 5);
        i0.ɵɵlistener("change", function SignupFormComponent_Template_input_change_6_listener() { return ctx.log(ctx.form.get("account.username")); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, SignupFormComponent_div_7_Template, 2, 0, "div", 6);
        i0.ɵɵtemplate(8, SignupFormComponent_div_8_Template, 5, 4, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵelementStart(10, "label", 7);
        i0.ɵɵtext(11, "Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 9);
        i0.ɵɵtext(14, "Sign Up");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.form.errors);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.validateUsername(ctx.form.get("account.username"), "pending"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.validateUsername(ctx.form.get("account.username"), "default"));
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i1.FormGroupName, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupFormComponent, [{
        type: Component,
        args: [{
                selector: 'signup-form',
                templateUrl: './signup-form.component.html',
                styleUrls: ['./signup-form.component.css']
            }]
    }], null, null); })();
//# sourceMappingURL=signup-form.component.js.map