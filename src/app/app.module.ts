import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormComponent } from './form/form.component';
import { RepoComponent } from './repo/repo.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UsersComponent } from './users/users.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { FormComponent } from './form/form.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    FormComponent,
    // FormComponent,
    RepoComponent,
    SearchUserComponent,
    DateCountPipe,
    StrikethroughDirective,
    SearchRepoComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
