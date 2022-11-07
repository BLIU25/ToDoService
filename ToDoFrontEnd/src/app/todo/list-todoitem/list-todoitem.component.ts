import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-list-todoitem',
  templateUrl: './list-todoitem.component.html',
  styleUrls: ['./list-todoitem.component.scss']
})
export class ListTodoitemComponent implements OnInit {

  public toDoItems: ToDoItem[] = [];

  constructor(private todoService: TodoService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  public detail(id: number): void {
    this.todoService.selectTodoItem(id);
    this.router.navigate(['todos', id]);
  }

  public update(id: number): void {
    this.todoService.selectTodoItemForUpdate(id);
    this.router.navigate(['todos', 'edit', id]);
  }

  public doDelete(id: number): void {
    this.todoService.delete(id);
    this.router.navigate(['todos', id]);
  }
}
