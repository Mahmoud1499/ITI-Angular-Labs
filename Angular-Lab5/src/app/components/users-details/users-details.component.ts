import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styles: [
  ]
})
export class UsersDetailsComponent {
  id: any;
  user: any;
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
}
