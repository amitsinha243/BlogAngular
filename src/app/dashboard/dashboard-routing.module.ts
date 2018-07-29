import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'blogs' , component: BlogsComponent},
    { path: 'posts/:id', component: PostsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
