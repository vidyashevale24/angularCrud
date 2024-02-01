import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { CreateStudentComponent } from './Pages/create-student/create-student.component';
import { EditStudentComponent } from './Pages/edit-student/edit-student.component';
import { DoctorListComponent } from './Pages/doctor-list/doctor-list.component';

const routes: Routes = [
  { path : '', component : HomePageComponent, title : 'Home Page'},
  { path : 'about-us', component : AboutPageComponent, title : 'About Us'},
  { path : 'contact-us', component : ContactPageComponent, title : 'Contact Us'},
  { path : 'students', component : StudentPageComponent, title : 'Student List'},
  { path : 'students/create', component : CreateStudentComponent, title : 'Create Student'},
  { path : 'students/:id/edit', component : EditStudentComponent, title : 'Edit Student'},
  { path : 'doctors', component : DoctorListComponent, title : 'Doctors List'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
