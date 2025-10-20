import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="container">
      <h1>Welcome to {{ title() }}!</h1>
      <p>This is a basic Angular app deployed on Azure Static Web Apps.</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding: 50px;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #0078d4;
    }
  `],
})
export class App {
  protected readonly title = signal('My First Static Web App');
}
