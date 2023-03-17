import { UserService } from './../../core/services/user.service';
import { PostsService } from './../../core/services/posts.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/Models/post';
import { Comment } from 'src/app/core/Models/comment';
import { User } from 'src/app/core/Models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  postId: number | undefined;
  post: Post | null = null;
  comments: Comment[] | any = [];
  user:User  | null = null;

  constructor(private route: ActivatedRoute, private postsService:PostsService, private userService:UserService) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.postId = id;
      this.getPost(id);
      this.getComments(id);
    });
  }


  getPost(id:number){
    this.postsService.getPost(id).subscribe(post=>{
      this.post = post;
      this.getAuthor(this.post.userId);

    })
  }

  getComments(postId:number){
    this.postsService.getCommentsPost(postId).subscribe(comments=>{
      this.comments = comments;
    })
  }

  getAuthor(id:number){
    this.userService.getUser(id).subscribe(user=>{
      this.user = user;
    })
  }
}
