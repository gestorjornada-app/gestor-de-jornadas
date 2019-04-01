import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { UserService } from '../services/user.service';

interface UserData {
    profession: any;
    firstName: any;
    lastName: any;
    biography: any;
    phoneNumber: any;
    address: any;
    email: any;
    institution: any;
    [x: string]: any;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    profession: any;
    firstName: any;
    lastName: any;
    biography: any;
    phoneNumber: any;
    address: any;
    email: any;
    institution: any;

    constructor( public authService: AuthService, public userService: UserService) {}

    ngOnInit() {
        this.userService.getUser(this.userService.getUserId()).subscribe( user => {
            const data: UserData = user as UserData;
            this.profession = data.user.profession;
            this.firstName = data.user.firstName;
            this.lastName = data.user.lastName;
            this.biography = data.user.biography;
            this.phoneNumber = data.user.phoneNumber;
            this.address = data.user.address;
            this.email = data.user.email;
            this.institution = data.user.institution;
        });
    }
    onSubmitSignOut() {
        this.authService.signOut();
    }
}
