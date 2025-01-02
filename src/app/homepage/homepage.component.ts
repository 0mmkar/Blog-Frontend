import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  blogs : any[] = [];

  constructor(){
    fetch('https://localhost:7169/api/Blog', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.blogs = data;
      })
      .catch(console.error);
  }
  
  function2(blogid : number) {
    localStorage.setItem("currBlogId",JSON.stringify(blogid));
  }
}
