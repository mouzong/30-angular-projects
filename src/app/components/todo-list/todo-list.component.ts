import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="todo-container">
      <h2>Todo List</h2>
      <input
        [(ngModel)]="newTask"
        placeholder="Ajouter une tache"
        (keyup.enter)="addTask()"
      />
      <button (click)="addTask()">Ajouter Tache</button>

      <p *ngIf="taskList.length === 0">Aucune tache en cours</p>
      <ul *ngIf="taskList.length > 0">
        <li *ngFor="let task of taskList; let i = index">
          {{ task }}
          <button (click)="removeTask(i)">Supprimer</button>
        </li>
      </ul>
    </div>
  `,
  styles: `
  
  .todo-container{
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
   input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: calc(100% - 60px);
   }

   button {
    background-color: #4caf40;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 2px;
    margin-top: 10px;
   }

   button:hover {
    background-color: #a0d3f2;
    color: #333;
   }

   ul {
    list-style-type: none;
    padding: 0;
   }

   li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: center;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
   }
  
  `,
})
export class TodoListComponent {
  taskList: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.taskList.push(this.newTask);
      this.newTask = '';
    }
  }
  removeTask(index: number) {
    this.taskList.splice(index, 1);
  }
}
