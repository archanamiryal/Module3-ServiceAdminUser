import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './adminuser.service';
import { UserComponent } from './user.component';
import { UserFilter } from './user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFilter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
