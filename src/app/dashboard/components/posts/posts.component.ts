import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../../interfaces/dashboard/posts';
import { PostsService } from '../../../services/dashboard/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postsService : PostsService) { 
  }
  post : Posts;
  showComment : boolean = false;
  comments : Comment[]=[];
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        //console.log(params.id);
        this.postsService.getPostById(params.id).subscribe(
          data => {
            this.post = data[0];
            console.log(this.post);
          },
          error => {
            console.log(error);
          }

        );
        this.postsService.getCommentsById(params.id).subscribe(
          data => {
            //console.log(data);
            this.comments = data.filter(x => {return x});
            console.log(this.comments);
          },
          error => {
            console.log(error);
          }

        );
      }
    )
  }

  showCommentArea() {
    this.showComment = !this.showComment;
  }

}
