import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./courses.component";
import * as i3 from "./favourite/favourite.component";
import * as i4 from "./input-format.directive";
import * as i5 from "./contact-form/contact-form.component";
import * as i6 from "./signup-form/signup-form.component";
import * as i7 from "./new-course-form/new-course-form.component";
import * as i8 from "./navbar/navbar.component";
import * as i9 from "@angular/router";
function AppComponent_pre_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵtext(1, "ng generate component xyz");
    i0.ɵɵelementEnd();
} }
function AppComponent_pre_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵtext(1, "ng add @angular/material");
    i0.ɵɵelementEnd();
} }
function AppComponent_pre_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵtext(1, "ng add @angular/pwa");
    i0.ɵɵelementEnd();
} }
function AppComponent_pre_108_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵtext(1, "ng add _____");
    i0.ɵɵelementEnd();
} }
function AppComponent_pre_109_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵtext(1, "ng test");
    i0.ɵɵelementEnd();
} }
function AppComponent_pre_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵtext(1, "ng build");
    i0.ɵɵelementEnd();
} }
function AppComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function AppComponent_ng_template_161_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "List of courses");
} }
function AppComponent_ng_template_163_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "No courses yet");
} }
function AppComponent_div_178_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Map View Content");
    i0.ɵɵelementEnd();
} }
function AppComponent_div_179_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "List View Content");
    i0.ɵɵelementEnd();
} }
function AppComponent_div_180_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Otherwise");
    i0.ɵɵelementEnd();
} }
function AppComponent_li_187_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Even");
    i0.ɵɵelementEnd();
} }
function AppComponent_li_187_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 78);
    i0.ɵɵlistener("click", function AppComponent_li_187_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const course_r16 = restoredCtx.$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onRemove(course_r16); });
    i0.ɵɵtext(3, "Remove");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 78);
    i0.ɵɵlistener("click", function AppComponent_li_187_Template_button_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const course_r16 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onChange(course_r16); });
    i0.ɵɵtext(5, "Change");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AppComponent_li_187_span_6_Template, 2, 0, "span", 82);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r16 = ctx.$implicit;
    const isEven_r17 = ctx.even;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r16.name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", isEven_r17 == true);
} }
export class AppComponent {
    constructor() {
        this.title = 'Angular hello-world';
        this.courses = [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
        ];
        this.task = {
            title: 'Review applications',
            assignee: {
                name: 'Safe Traversal Operator'
            }
        };
        this.viewMode = 'map';
        this.post = {
            title: 'Title',
            isFavorite: true
        };
    }
    onFavoriteChanged(eventArgs) {
        console.log('changed', eventArgs);
    }
    onAdd() {
        this.courses.push({ id: 4, name: 'course4' });
    }
    onRemove(course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }
    onChange(course) {
        course.name = "UPDATED";
    }
    loadCourses() {
        this.courses = [
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
        ];
    }
    trackCourse(index, course) {
        return (course ? course.id : undefined);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 198, vars: 24, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://youtube.com/angular", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [1, "card-container"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/tutorial", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/cli", 1, "card"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["target", "_blank", "rel", "noopener", "href", "https://blog.angular.io/", 1, "card"], ["d", "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"], ["target", "_blank", "rel", "noopener", "href", "https://angular.io/devtools/", 1, "card"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "material-icons"], ["fill", "none", "height", "24", "width", "24"], ["d", "M14.73,13.31C15.52,12.24,16,10.93,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.43,0,2.74-0.48,3.81-1.27L19.59,21L21,19.59L14.73,13.31z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z"], ["points", "10.29,8.44 9.5,6 8.71,8.44 6.25,8.44 8.26,10.03 7.49,12.5 9.5,10.97 11.51,12.5 10.74,10.03 12.75,8.44"], ["type", "hidden"], ["selection", ""], ["tabindex", "0", 1, "card", "card-small", 3, "click"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], [1, "terminal", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], ["title", "Animations", "href", "https://angular.io/guide/animations", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["id", "Group_20", "data-name", "Group 20", "xmlns", "http://www.w3.org/2000/svg", "width", "21.813", "height", "23.453", "viewBox", "0 0 21.813 23.453"], ["id", "Path_15", "data-name", "Path 15", "d", "M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z", "transform", "translate(-4088.702 -972.736)", "fill", "#ffa726"], ["id", "Path_16", "data-name", "Path 16", "d", "M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z", "transform", "translate(-4170.633 -972.736)", "fill", "#fb8c00"], ["id", "Path_17", "data-name", "Path 17", "d", "M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1058.315)", "fill", "#ffe0b2"], ["id", "Path_18", "data-name", "Path 18", "d", "M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1036.757)", "fill", "#fff3e0"], ["id", "Path_19", "data-name", "Path 19", "d", "M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1015.199)", "fill", "#fff"], ["title", "CLI", "href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21.762", "height", "23.447", "viewBox", "0 0 21.762 23.447"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(0)"], ["id", "Path_20", "data-name", "Path 20", "d", "M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-2649.48 -313.618)", "fill", "#37474f"], ["id", "Path_21", "data-name", "Path 21", "d", "M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-2731.05 -313.618)", "fill", "#263238"], ["id", "Path_22", "data-name", "Path 22", "d", "M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z", "transform", "translate(-2687.274 -362.17)", "fill", "#fff"], ["id", "Path_23", "data-name", "Path 23", "d", "M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z", "transform", "translate(-2702.289 -380.631)", "fill", "#fff"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "3.517", "height", "0.469", "transform", "translate(9.709 13.744)", "fill", "#fff"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Join the Conversation on Discord", "href", "https://discord.gg/angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "viewBox", "0 0 245 240"], ["d", "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"], ["d", "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"], ["href", "https://github.com/angular/angular", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [3, "isFavorite", "change"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["coursesList", ""], ["noCourses", ""], [3, "hidden"], [1, "nav", "nav-pills"], [1, "btn", "btn-primary"], [3, "click"], [3, "ngSwitch"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "text", 3, "appInputFormat"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "Welcome");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "div", 2);
        i0.ɵɵelementStart(5, "a", 3);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(6, "svg", 4);
        i0.ɵɵelement(7, "rect", 5);
        i0.ɵɵelement(8, "path", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(9, "a", 7);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(10, "svg", 8);
        i0.ɵɵelement(11, "path", 9);
        i0.ɵɵelement(12, "path", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(13, "div", 11);
        i0.ɵɵelementStart(14, "div", 12);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(15, "svg", 13);
        i0.ɵɵelementStart(16, "title");
        i0.ɵɵtext(17, "Rocket Ship");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "g", 14);
        i0.ɵɵelement(19, "circle", 15);
        i0.ɵɵelementStart(20, "g", 16);
        i0.ɵɵelement(21, "path", 17);
        i0.ɵɵelement(22, "path", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(23, "span");
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(25, "svg", 19);
        i0.ɵɵelementStart(26, "title");
        i0.ɵɵtext(27, "Rocket Ship Smoke");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "path", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(29, "h2");
        i0.ɵɵtext(30, "Resources");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "p");
        i0.ɵɵtext(32, "Here are some links to help you get started:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 21);
        i0.ɵɵelementStart(34, "a", 22);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(35, "svg", 23);
        i0.ɵɵelement(36, "path", 24);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(37, "span");
        i0.ɵɵtext(38, "Learn Angular");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(39, "svg", 23);
        i0.ɵɵelement(40, "path", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(41, "a", 26);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(42, "svg", 23);
        i0.ɵɵelement(43, "path", 27);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(44, "span");
        i0.ɵɵtext(45, "CLI Documentation");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(46, "svg", 23);
        i0.ɵɵelement(47, "path", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(48, "a", 28);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(49, "svg", 23);
        i0.ɵɵelement(50, "path", 29);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(51, "span");
        i0.ɵɵtext(52, "Angular Blog");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(53, "svg", 23);
        i0.ɵɵelement(54, "path", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(55, "a", 30);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(56, "svg", 31);
        i0.ɵɵelementStart(57, "g");
        i0.ɵɵelement(58, "rect", 32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "g");
        i0.ɵɵelementStart(60, "g");
        i0.ɵɵelement(61, "path", 33);
        i0.ɵɵelement(62, "polygon", 34);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(63, "span");
        i0.ɵɵtext(64, "Angular DevTools");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(65, "svg", 23);
        i0.ɵɵelement(66, "path", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(67, "h2");
        i0.ɵɵtext(68, "Next Steps");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "p");
        i0.ɵɵtext(70, "What do you want to do next with your app?");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(71, "input", 35, 36);
        i0.ɵɵelementStart(73, "div", 21);
        i0.ɵɵelementStart(74, "button", 37);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_74_listener() { i0.ɵɵrestoreView(_r22); const _r0 = i0.ɵɵreference(72); return _r0.value = "component"; });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(75, "svg", 23);
        i0.ɵɵelement(76, "path", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(77, "span");
        i0.ɵɵtext(78, "New Component");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(79, "button", 37);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_79_listener() { i0.ɵɵrestoreView(_r22); const _r0 = i0.ɵɵreference(72); return _r0.value = "material"; });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(80, "svg", 23);
        i0.ɵɵelement(81, "path", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(82, "span");
        i0.ɵɵtext(83, "Angular Material");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(84, "button", 37);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_84_listener() { i0.ɵɵrestoreView(_r22); const _r0 = i0.ɵɵreference(72); return _r0.value = "pwa"; });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(85, "svg", 23);
        i0.ɵɵelement(86, "path", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(87, "span");
        i0.ɵɵtext(88, "Add PWA Support");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(89, "button", 37);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_89_listener() { i0.ɵɵrestoreView(_r22); const _r0 = i0.ɵɵreference(72); return _r0.value = "dependency"; });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(90, "svg", 23);
        i0.ɵɵelement(91, "path", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(92, "span");
        i0.ɵɵtext(93, "Add Dependency");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(94, "button", 37);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_94_listener() { i0.ɵɵrestoreView(_r22); const _r0 = i0.ɵɵreference(72); return _r0.value = "test"; });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(95, "svg", 23);
        i0.ɵɵelement(96, "path", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(97, "span");
        i0.ɵɵtext(98, "Run and Watch Tests");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(99, "button", 37);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_99_listener() { i0.ɵɵrestoreView(_r22); const _r0 = i0.ɵɵreference(72); return _r0.value = "build"; });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(100, "svg", 23);
        i0.ɵɵelement(101, "path", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(102, "span");
        i0.ɵɵtext(103, "Build for Production");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(104, "div", 39);
        i0.ɵɵtemplate(105, AppComponent_pre_105_Template, 2, 0, "pre", 40);
        i0.ɵɵtemplate(106, AppComponent_pre_106_Template, 2, 0, "pre", 41);
        i0.ɵɵtemplate(107, AppComponent_pre_107_Template, 2, 0, "pre", 41);
        i0.ɵɵtemplate(108, AppComponent_pre_108_Template, 2, 0, "pre", 41);
        i0.ɵɵtemplate(109, AppComponent_pre_109_Template, 2, 0, "pre", 41);
        i0.ɵɵtemplate(110, AppComponent_pre_110_Template, 2, 0, "pre", 41);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(111, "div", 21);
        i0.ɵɵelementStart(112, "a", 42);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(113, "svg", 43);
        i0.ɵɵelement(114, "path", 44);
        i0.ɵɵelement(115, "path", 45);
        i0.ɵɵelement(116, "path", 46);
        i0.ɵɵelement(117, "path", 47);
        i0.ɵɵelement(118, "path", 48);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(119, "a", 49);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(120, "svg", 50);
        i0.ɵɵelementStart(121, "title");
        i0.ɵɵtext(122, "Angular CLI Logo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(123, "g", 51);
        i0.ɵɵelement(124, "path", 52);
        i0.ɵɵelement(125, "path", 53);
        i0.ɵɵelement(126, "path", 54);
        i0.ɵɵelement(127, "path", 55);
        i0.ɵɵelement(128, "rect", 56);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(129, "a", 57);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(130, "svg", 58);
        i0.ɵɵelementStart(131, "title");
        i0.ɵɵtext(132, "Meetup Logo");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(133, "path", 59);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(134, "a", 60);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(135, "svg", 61);
        i0.ɵɵelementStart(136, "title");
        i0.ɵɵtext(137, "Discord Logo");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(138, "path", 62);
        i0.ɵɵelement(139, "path", 63);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(140, "footer");
        i0.ɵɵtext(141, " Love Angular?\u00A0 ");
        i0.ɵɵelementStart(142, "a", 64);
        i0.ɵɵtext(143, " Give our repo a star. ");
        i0.ɵɵelementStart(144, "div", 65);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(145, "svg", 23);
        i0.ɵɵelement(146, "path", 66);
        i0.ɵɵelement(147, "path", 67);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(148, " Star ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(149, "a", 64);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(150, "svg", 23);
        i0.ɵɵelement(151, "path", 68);
        i0.ɵɵelement(152, "path", 66);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(153, "svg", 69);
        i0.ɵɵelementStart(154, "title");
        i0.ɵɵtext(155, "Gray Clouds Background");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(156, "path", 70);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelement(157, "courses");
        i0.ɵɵelementStart(158, "favourite", 71);
        i0.ɵɵlistener("change", function AppComponent_Template_favourite_change_158_listener($event) { return ctx.onFavoriteChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(159, " ngIf:\n");
        i0.ɵɵtemplate(160, AppComponent_div_160_Template, 1, 0, "div", 72);
        i0.ɵɵtemplate(161, AppComponent_ng_template_161_Template, 1, 0, "ng-template", null, 73, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(163, AppComponent_ng_template_163_Template, 1, 0, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(165, "div", 75);
        i0.ɵɵtext(166, "List of courses");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(167, "div", 75);
        i0.ɵɵtext(168, "No courses yet");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(169, " ngSwitch:\n");
        i0.ɵɵelementStart(170, "ul", 76);
        i0.ɵɵelementStart(171, "li", 77);
        i0.ɵɵelementStart(172, "a", 78);
        i0.ɵɵlistener("click", function AppComponent_Template_a_click_172_listener() { return ctx.viewMode = "map"; });
        i0.ɵɵtext(173, "Map View");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(174, "li", 77);
        i0.ɵɵelementStart(175, "a", 78);
        i0.ɵɵlistener("click", function AppComponent_Template_a_click_175_listener() { return ctx.viewMode = "list"; });
        i0.ɵɵtext(176, "List View");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(177, "div", 79);
        i0.ɵɵtemplate(178, AppComponent_div_178_Template, 2, 0, "div", 41);
        i0.ɵɵtemplate(179, AppComponent_div_179_Template, 2, 0, "div", 41);
        i0.ɵɵtemplate(180, AppComponent_div_180_Template, 2, 0, "div", 40);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(181, " ngFor:\n");
        i0.ɵɵelementStart(182, "button", 78);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_182_listener() { return ctx.loadCourses(); });
        i0.ɵɵtext(183, "Load Courses");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(184, "button", 78);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_184_listener() { return ctx.onAdd(); });
        i0.ɵɵtext(185, "Add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(186, "ul");
        i0.ɵɵtemplate(187, AppComponent_li_187_Template, 7, 2, "li", 80);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(188, " Safe Traversal Operator:\n");
        i0.ɵɵelementStart(189, "span");
        i0.ɵɵtext(190);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(191, " Directives:\n");
        i0.ɵɵelement(192, "input", 81);
        i0.ɵɵelement(193, "contact-form");
        i0.ɵɵelement(194, "signup-form");
        i0.ɵɵelement(195, "new-course-form");
        i0.ɵɵelement(196, "navbar");
        i0.ɵɵelement(197, "router-outlet");
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(72);
        const _r8 = i0.ɵɵreference(162);
        const _r10 = i0.ɵɵreference(164);
        i0.ɵɵadvance(24);
        i0.ɵɵtextInterpolate1("", ctx.title, " app is running!");
        i0.ɵɵadvance(80);
        i0.ɵɵproperty("ngSwitch", _r0.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitchCase", "material");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "pwa");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "dependency");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "test");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "build");
        i0.ɵɵadvance(48);
        i0.ɵɵproperty("isFavorite", ctx.post.isFavorite);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.courses.length > 0)("ngIfThen", _r8)("ngIfElse", _r10);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("hidden", ctx.courses.length == 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", ctx.courses.length > 0);
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.viewMode == "map");
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("active", ctx.viewMode == "list");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngSwitch", ctx.viewMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "map");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "list");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.courses)("ngForTrackBy", ctx.trackCourse);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.task.assignee == null ? null : ctx.task.assignee.name);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("appInputFormat", "lowercase");
    } }, directives: [i1.NgSwitch, i1.NgSwitchDefault, i1.NgSwitchCase, i2.CoursesComponent, i3.FavouriteComponent, i1.NgIf, i1.NgForOf, i4.InputFormatDirective, i5.ContactFormComponent, i6.SignupFormComponent, i7.NewCourseFormComponent, i8.NavbarComponent, i9.RouterOutlet], styles: ["", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 8px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    all: unset;\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n  @media screen and (max-width: 767px) {\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map