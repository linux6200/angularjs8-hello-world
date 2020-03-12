import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { GoJSComponent } from './go-js/go-js.component'


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'list', component: ListComponent },
  {path: 'gojs', component: GoJSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
