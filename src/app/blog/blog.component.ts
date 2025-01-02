import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blog : any = {title:"fetching"};
  comments : any[] = [];

  constructor(){
    let currBlogId = localStorage.getItem("currBlogId");
    let id = currBlogId ? JSON.parse(currBlogId) : null;

    fetch(`https://localhost:7169/api/Blog/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.blog = data;
    })
    .catch(console.error);

    fetch(`https://localhost:7169/api/Comment/blog/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.comments = data;
    })
    .catch(console.error);
  }
}
