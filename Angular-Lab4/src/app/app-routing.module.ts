import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { ErrorComponent } from './components/error/error.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  { path: "", component: RegistrationFormComponent },
  { path: "students", component: StudentsTableComponent },
  { path: "student/:id", component: StudentDetailsComponent },
  { path: "**", component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
