import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [TodoListComponent],
  template: ` <app-todo-list /> `,
  styles: `
  
  `,
})
export class AppComponent {
  title = 'angular-30-projects';
}
