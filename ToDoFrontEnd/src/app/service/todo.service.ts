import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public errorMessage?: string = 'create failed';
  private _selectedTodoItem: ToDoItem = {} as ToDoItem;
  private _updatingTodoItem: ToDoItem = {} as ToDoItem;
  constructor(private todoStore: TodoStoreService, private todoApi: TodoApiService) {
  }

  public getAll(): Observable<Array<ToDoItem>> {
    return this.todoApi.getAll();
  }

  public findById(id: number): Observable<ToDoItem> {
    todoItem:ToDoItem;
    return this.todoApi.getById(id);
  }

  public create(todoItem: ToDoItem): void {
    this.todoApi.create(todoItem).subscribe({
      next: response =>{},
      error:error=>{
        this.errorMessage = error.errorMessage;
      }
    });
  }

  public update(id: number, updateTodoItem: ToDoItem): void {
    this.todoApi.update(id, updateTodoItem);
  }

  public delete(id: number): void {
    this.todoApi.delete(id);
  }

  public selectTodoItem(id: number): void {
    this._selectedTodoItem = this.todoStore.findById(id);
  }

  public selectTodoItemForUpdate(id: number): void {
    this._updatingTodoItem = Object.assign({}, this.todoStore.findById(id));
  }

  public currentTodoItem(): ToDoItem {
    return this._selectedTodoItem;
  }

  public currentUpdatingTodoItem(): ToDoItem {
    return this._updatingTodoItem;
  }
}
