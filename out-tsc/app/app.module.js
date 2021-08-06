import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //added for 2 way binding
import { RouterModule } from '@angular/router'; //in order to define our routes
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [CoursesService], imports: [[
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'followers/:username/:id', component: GithubProfileComponent },
                { path: 'followers', component: GithubFollowersComponent },
                //        { path: 'posts', component: PostsComponent }
                { path: '**', component: NotFoundComponent },
            ])
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    //all components, pipes and directives to be initiated here:
                    AppComponent,
                    SignupFormComponent,
                    CoursesComponent,
                    SummaryPipe,
                    FavouriteComponent,
                    InputFormatDirective,
                    ContactFormComponent,
                    NewCourseFormComponent,
                    NavbarComponent,
                    HomeComponent,
                    GithubProfileComponent,
                    NotFoundComponent,
                    GithubFollowersComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule.forRoot([
                        { path: '', component: HomeComponent },
                        { path: 'followers/:username/:id', component: GithubProfileComponent },
                        { path: 'followers', component: GithubFollowersComponent },
                        //        { path: 'posts', component: PostsComponent }
                        { path: '**', component: NotFoundComponent },
                    ])
                ],
                providers: [CoursesService],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [
        //all components, pipes and directives to be initiated here:
        AppComponent,
        SignupFormComponent,
        CoursesComponent,
        SummaryPipe,
        FavouriteComponent,
        InputFormatDirective,
        ContactFormComponent,
        NewCourseFormComponent,
        NavbarComponent,
        HomeComponent,
        GithubProfileComponent,
        NotFoundComponent,
        GithubFollowersComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map