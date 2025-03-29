import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <div
      class="max-w-md mx-auto my-5 p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-md font-sans"
    >
      <h2 class="text-center text-2xl mb-4">Profile Card</h2>
      <p class="text-[15px]"><strong>Name: </strong>{{ name }}</p>
      <p class="text-[15px]"><strong>Age: </strong> {{ age }}</p>
      <p class="text-[15px]">
        <strong>Description: </strong> {{ description }}
      </p>

      <h3 class="text-left text-xl mt-6 mb-2">Update Profile</h3>
      <input
        class="w-full p-2 my-1 border border-gray-300 rounded-md text-[13px]"
        type="text"
        [(ngModel)]="name"
        placeholder="Enter your new name"
      />
      <input
        class="w-full p-2 my-1 border border-gray-300 rounded-md text-[13px]"
        type="number"
        [(ngModel)]="age"
        placeholder="Enter your age"
      />
      <input
        class="w-full p-2 my-1 border border-gray-300 rounded-md text-[13px]"
        type="text"
        [(ngModel)]="description"
        placeholder="short description about yourself"
      />
    </div>
  `,
  styles: `

 

  // input {
  //   width: 95%;
  //   padding: 10px;
  //   margin: 5px 0;
  //   border: 1px solid #ccc;
  //   border-radius: 5px;
  //   font-size: 16px;
  // }
  `,
})
export class AppComponent {
  name: string = 'Andreas Mouzong';
  age: number = 25;
  description: string = 'Ingé DevOps passioné de la Cyber et IA...';
}
