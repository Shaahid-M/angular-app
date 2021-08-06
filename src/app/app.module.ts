import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//added for 2 way binding
import { RouterModule } from '@angular/router';//in order to define our routes

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

@NgModule({
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
    ReactiveFormsModule, //for signup-form.component/s
    RouterModule.forRoot([// | forChild ;     
        { path: '', component: HomeComponent },
        { path: 'followers/:username/:id', component: GithubProfileComponent },
        { path: 'followers', component: GithubFollowersComponent },
//        { path: 'posts', component: PostsComponent }
        { path: '**', component: NotFoundComponent },

      ])
  ],
  providers: [CoursesService], // added api service as a provider
  bootstrap: [AppComponent]
})
export class AppModule { }
