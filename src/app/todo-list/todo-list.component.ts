import { Component, Input } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList:any[]=[];
  @ Input() item = 0;

  getTodoValue(data:string){
     this.todoList.push({id:this.todoList.length,task:data});
     console.log(this.todoList);
  }

  removeTodo(id:number){
    this.todoList = this.todoList.filter(item => item.id !== id)
  }

  loginForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required])
  })

  userlogin(){
    console.log(this.loginForm.value);
  }

  get firstname(){
    return this.loginForm.get('firstname');
  }

  get lastname(){
    return this.loginForm.get('lastname');
  }

}
