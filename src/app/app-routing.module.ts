import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemPageComponent } from './item-page/item-page.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'list', component: ListComponent},
  {path: 'item-page/:id', component: ItemPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
