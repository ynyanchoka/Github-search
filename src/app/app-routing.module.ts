import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';


import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'user', component: UsersComponent},
  { path: 'about', component: AboutComponent},
  { path: 'search', component: SearchUserComponent},
  { path: 'repo', component: SearchRepoComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},


  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
