import { AuthService } from './../../../main/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  logout(): void {
    this.authService.SignOut();
  }
  ngOnInit(): void {
  }

}
