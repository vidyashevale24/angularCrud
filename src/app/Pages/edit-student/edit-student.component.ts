import { Component } from '@angular/core';
import { StudentService, StudentEditResponse } from 'src/app/Services/student.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
 
  studentId !: any;
  student !: any;
  isLoading:boolean = false;
  loadingTitle:string = 'Loading';
  errors : any = [];

  constructor(private route : ActivatedRoute, private studentService : StudentService, private router: Router){}
  	ngOnInit(){
		this.studentId = this.route.snapshot.paramMap.get('id');
		this.studentService.getStudent(this.studentId).subscribe(res => {
			this.student = res.student
		})
	}
	updateStudent(){
		var inputData = {
			name :this.student.name,
			course :this.student.course,
			email : this.student.email,
			phone : this.student.phone
		}
		this.studentService.updateStudent(inputData, this.studentId).subscribe({
			next : (res :any ) => {
				console.log(res, 'Response');	
				alert(res.message);	
				this.studentService.getStudents();
				this.router.navigate(['/students']);		
			},
			error : (err :any ) => {
				console.log(err);
				this.errors = err.error.errors
			}
		})
	}
}

