import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { ToDoItem } from '../../model/ToDoItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo-item',
  templateUrl: './update-todo-item.component.html',
  styleUrls: ['./update-todo-item.component.scss']
})
export class UpdateTodoItemComponent implements OnInit {

  // get todoItem(): ToDoItem{
  //   return this.todoService.currentUpdatingTodoItem();
  // }
  
  todoItem: ToDoItem = new ToDoItem(0, '', '', false);

  constructor(public todoService: TodoService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.todoService.findById(Number(id)).subscribe(res => {
      this.todoItem = res;
    });
  }

  update(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.todoService.update(Number(id),this.todoItem);
  }
}
