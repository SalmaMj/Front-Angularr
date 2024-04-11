import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourceListComponent } from './Ressource/components/ressource-list/ressource-list.component';



export const routes: Routes = [

  { path: 'list/:option', component: RessourceListComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

