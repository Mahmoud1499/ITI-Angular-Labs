import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent {
  id: any;
  user: any;
  isUpdated: boolean = false;
  constructor(myRoute: ActivatedRoute, public userApiService: UserApiService) {
    this.id = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.userApiService.getUserByID(this.id).subscribe(
      {
        next: (data) => {
          this.user = data;
        },
        error: (err) => { console.log(err) }
      }
    );
  }
  updateUser(name: any, age: any, email: any, phone: any, address: any) {
    let newUser = { name, age, email, phone, address };
    this.userApiService.updateUser(this.id, newUser).subscribe();
    this.isUpdated = true
  }

}
