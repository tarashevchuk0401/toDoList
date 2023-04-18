import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { ResolverService } from './services/resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemPageComponent,
    LoginComponent,
    NotFoundComponent,
    DoneTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
