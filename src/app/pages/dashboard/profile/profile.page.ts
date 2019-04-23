import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

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
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

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
            this.profession = data.profession;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.biography = data.biography;
            this.phoneNumber = data.phoneNumber;
            this.address = data.address;
            this.email = data.email;
            this.institution = data.institution;
        });
    }
    onSubmitSignOut() {
        this.authService.signOut();
    }
}
