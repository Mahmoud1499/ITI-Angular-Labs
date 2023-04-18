import { Component } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent {
  isAdded: boolean = false;

  constructor(private apiService: UserApiService) {

  }
  addUser(name: any, age: any, email: any, phone: any, address: any) {

    let newUser = { name, age, email, phone, address };
    this.apiService.addNewUser(newUser).subscribe();
    this.isAdded = true

  }
}
