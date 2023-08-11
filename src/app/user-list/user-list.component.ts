import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @ Input() data:{name:string,email:string} = {name:'',email:''}
  @ Output() updateDataEvent = new EventEmitter<string>();
  displayval = '';
  show = true;
  color ='green'
  disable=false;
  count:number = 0;
  getData(name:string){
    //alert(`Name:${name},Age:${age}`)
    console.log(name);
  }
  getUser(name:string){
     this.displayval = name
  }
  counter(type:string){
    type === "Add" ? this.count++ : this.count--
  }
  user=['Raj','Tushar','Dhruv','Avadh']
  userDetails = [
  {name:"Raj",email:"raj@gmail.com"},
  {name:"Tushar",email:"tushar@gmail.com"},
  {name:"Dhruv",email:"dhruv@gmail.com"},
  {name:"Avadh",email:"avadh@gmail.com"}  
]
userData:any ={}
getFormValue(data:NgForm){
  this.userData = data;
}

}
