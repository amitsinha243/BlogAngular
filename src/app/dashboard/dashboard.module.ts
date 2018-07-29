import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PostsService } from '../services/dashboard/posts.service';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, BlogsComponent, PostsComponent],
  providers: [PostsService]
})
export class DashboardModule { }
