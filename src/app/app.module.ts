import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { CreateStudentComponent } from './Pages/create-student/create-student.component';
import { EditStudentComponent } from './Pages/edit-student/edit-student.component';
import { DoctorListComponent } from './Pages/doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    CreateStudentComponent,
    LoaderComponent,
    StudentPageComponent,
    EditStudentComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
