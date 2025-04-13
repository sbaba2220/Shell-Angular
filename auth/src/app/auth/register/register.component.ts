import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `<div class='auth-form'><h2>Register</h2><form><input type='text' placeholder='Username' /><input type='email' placeholder='Email' /><input type='password' placeholder='Password' /><button>Register</button></form></div>`,
  styles: [`.auth-form { max-width: 400px; margin: auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background: #fff; }`]
})
export class RegisterComponent {}