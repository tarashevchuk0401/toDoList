import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LoginComponent } from './login/login.component';
import { guard } from './services/guard.service';
import { exitGuard } from './services/exit-guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: ListComponent , canActivate: [guard]},
  {path: 'done-tasks', component: DoneTasksComponent , canActivate: [guard], resolve: {doneTask: ResolverService}},
  {path: 'item-page/:id', component: ItemPageComponent, canActivate: [guard], canDeactivate: [exitGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
