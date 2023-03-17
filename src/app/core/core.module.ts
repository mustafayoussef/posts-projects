import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { CardModule } from 'primeng/card';
import { CommentComponent } from './components/comment/comment.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SearchPipe } from './pips/search.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    PostCardComponent,
    CommentComponent,
    UserCardComponent,
    SearchPipe,
  ],
  imports: [CommonModule, RouterModule, CardModule],
  exports: [
    HeaderComponent,
    PostCardComponent,
    CommentComponent,
    UserCardComponent,
    SearchPipe
  ],
})
export class CoreModule {}
