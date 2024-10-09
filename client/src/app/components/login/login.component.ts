import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password1: string = '';

  constructor(private authService: AuthService, private router: Router) { sessionStorage.clear()}

  login(): void {
    this.authService.loginToServer(this.correo, this.password1).subscribe(response => {
      if (response.length!=0) {
          this.authService.setLoggendInStatus(true);  
          console.log(response)
          this.router.navigate(['/gestion']);
          console.log(response)
          const sesion = JSON.stringify(response);
          sessionStorage.setItem("usuario", sesion);
          this.authService.setCurrentUser();
      } else {
          // Aquí puedes mostrar un mensaje de error si el inicio de sesión no es exitoso.
          alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
  });
}

}
