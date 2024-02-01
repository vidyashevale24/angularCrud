import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  	constructor(private studentService : StudentService, private router: Router){}
	name !: string
	course !: string
	phone !: string
	email !: string
	isLoading:boolean = false;
	loadingTitle:string = 'Loading';
	errors : any = []
  	saveStudent(){
	 	this.isLoading = true;
	 	this.loadingTitle = 'Saving';
       	var inputData = {
			name : this.name,
			course : this.course,
	 		phone : this.phone,
	 		email : this.email
        }
       	this.studentService.saveStudent(inputData).subscribe({
	 		next : (res :any ) => {
				console.log(res, 'Response');
				alert(res.message);
				this.name = '';
	 			this.course = '';
	 			this.phone = '';
	 			this.email = ''; 
				this.isLoading = false;
				this.studentService.getStudents();
				this.router.navigate(['/students']);
	 		},
	 		error : (err :any ) => {
	 			console.log(err.error.errors, 'Error')
	 			this.errors = err.error.errors;
	 			this.isLoading = true;
	 		},
	 	});
  	}
}
