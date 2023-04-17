import { Component } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styles: []
})
export class StudentsTableComponent {

  students = [
    { name: "Mahmoud", age: 23, email: "mahmoud@gmail.com" },
    { name: "Omar", age: 24, email: "omar@gmail.com" },
    { name: "Khaled", age: 25, email: "Khaled@gmail.com" },
    { name: "Mohamed", age: 26, email: "mohamed@gmail.com" },
    { name: "Ahmed", age: 27, email: "ahmed@gmail.com" },
    { name: "mostafa", age: 28, email: "mostafa@gmail.com" }
  ]

}
