import { Post } from './../../core/Models/post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../core/services/posts.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent {
  userName: string = '';
  posts: Post[] | any = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ name ,id }) => {
      this.userName = name;
      this.getPosts(id);
    });
  }

  getPosts(userId: number) {
    this.postsService.getUserPost(userId).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
