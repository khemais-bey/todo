import { Component,OnInit } from '@angular/core';
import {Todo } from '../../models/todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] = [];
  isDescription = false;
  inputTodo:string = "";
  inputDescription:string = "";
  todoForm: FormGroup = new FormGroup({
    inputTodo: new FormControl('', [Validators.required]),
    inputDescription: new FormControl('')
})
  constructor() { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      inputTodo: new FormControl('', [Validators.required]),
      inputDescription: new FormControl('')
  })
    this.todos = [];
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
    this.todos.push( this.todos.splice(id,1)[0] );

  }

  terminerTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.todoForm.value.inputTodo,
      completed: false,
      description :  this.todoForm.value.inputDescription
    });
    this.todos.reverse();
    this.todoForm.reset();


  }
  displayDescription(){
    this.isDescription = !this.isDescription;
  }
}
