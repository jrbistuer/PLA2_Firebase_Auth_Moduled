import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private auth: AuthService,
    private router: Router) {}

  logOut() {
    this.auth.logout().then((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    })
  }

}
