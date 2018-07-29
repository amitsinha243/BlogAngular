import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/dashboard/posts.service';
import { Posts } from '../../../interfaces/dashboard/posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  posts : Posts[];
  constructor(private postsService: PostsService, private router: Router) { 
  }

  ngOnInit() {
    this.postsService.getPost(1).subscribe(
      data => { 
        this.posts = data;
        console.log(this.posts);
      },
      error => { console.log(error); }
    )
  }

  view(index) {
    this.router.navigate(['home/posts', this.posts[index].id]);
  }

}
