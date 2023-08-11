import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog'
  GetValue(){

    return "Hello Guys!"
  };
  data = 2
  updateItem(){
    this.data = Math.floor(Math.random()*10);
  }

  userDetails = [
    {name:"Raj",email:"raj@gmail.com"},
    {name:"Tushar",email:"tushar@gmail.com"},
    {name:"Dhruv",email:"dhruv@gmail.com"},
    {name:"Avadh",email:"avadh@gmail.com"}  
  ]
  updateData(data:string){
  console.log(data);
  }
  name:any;
  userlogin(item:any){
    console.log(item);
    }
}


