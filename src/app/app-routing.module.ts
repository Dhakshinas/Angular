import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {path:"" , component:HomeComponent , pathMatch:'full'},
  {path:"list", component:ListComponent},
  {path:"detail/:pid" , component:DetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
