import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <div class="profile-card">
      <h2>Profile Card</h2>
      <p><strong>Name: </strong>{{ name }}</p>
      <p><strong>Age: </strong> {{ age }}</p>
      <p><strong>Description: </strong> {{ description }}</p>

      <h3>Update Profile</h3>
      <input type="text" [(ngModel)]="name" placeholder="Enter your new name" />
      <input type="number" [(ngModel)]="age" placeholder="Enter your age" />
      <input
        type="text"
        [(ngModel)]="description"
        placeholder="short description about yourself"
      />
    </div>
  `,
  styles: `
  .profile-card {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 17px;
  }

  input {
    width: 95%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  `,
})
export class AppComponent {
  name: string = 'Andreas Mouzong';
  age: number = 25;
  description: string = 'Ingé DevOps passioné de la Cyber et IA...';
}
