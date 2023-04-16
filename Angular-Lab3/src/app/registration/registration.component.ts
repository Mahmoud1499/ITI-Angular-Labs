import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userName = "";
  userAge = 0;
  students: { name: string, age: number }[] = []
  @Output() addStudent = new EventEmitter<{ name: string; age: number }>();
  add() {
    let newStudent = { name: this.userName, age: this.userAge }
    if (this.userAge > 20 && this.userAge < 40 && this.userName.length > 3) {

      this.students.push(newStudent);
    }
    this.addStudent.emit({ name: this.userName, age: this.userAge });
    this.userName = '';
    this.userAge = 0;
    console.log(this.students);

  }

}
