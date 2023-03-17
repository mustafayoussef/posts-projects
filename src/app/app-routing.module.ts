import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { UsersComponent } from './pages/users/users.component';
import { PostComponent } from './pages/post/post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {path:'',redirectTo:'posts',pathMatch:'full'},
  {path:'posts',component:PostsComponent},
  {path:'post/:id',component:PostComponent},
  {path:'users',component:UsersComponent},
  {path:'user/:name/:id',component:UserPostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
