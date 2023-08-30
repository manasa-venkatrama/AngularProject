import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  tasks: Task[] = [ 
    new Task("Vsit Ann"), 
    new Task("Call dad"), 
    new Task("Call mom"),
    new Task("Go to gym"), 
    new Task("Call kjhk") 
   ]
 
   add( newTask: string ){
     this.tasks.push( new Task( newTask) )
   }
 
   remove( existingTask: Task ){
  var userConfirmed  = confirm(`are you sure \n "${existingTask.title}" ?`)
 if( userConfirmed){
   this.tasks = this.tasks.filter( task => task!= existingTask )
 }
 }
 }
 
 class Task {
   constructor(public title: string){
   }
 
   public isDone = false
   
 toggleIsDone(){
   this.isDone = !this.isDone;
   }
 }

