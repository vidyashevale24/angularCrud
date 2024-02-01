import { StudentResponse } from './student.service';
export interface StudentResponseType {
	status: number;
	message: StudentResponse[];
}