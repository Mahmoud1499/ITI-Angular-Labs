import { Component } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  users: any;

  constructor(public ApiService: UserApiService) {
  }

  ngOnInit(): void {
    this.ApiService.getAllUsers().subscribe(
      {
        next: (data) => {
          this.users = data;
        },
        error: (err) => { console.log(err) }
      }
    )
  }

  deleteUser(id: any) {
    if (confirm(`Are you Sure you want delete user number ${id}`)) {

      this.ApiService.deleteUser(id).subscribe(
        () => this.ngOnInit()
        ,
        (err) => console.log(err)
      );
    }
  }

}

