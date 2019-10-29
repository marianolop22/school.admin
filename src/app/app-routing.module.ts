import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './pages/school/school.component';
import { GroupTemplateComponent } from './pages/group-template/group-template.component';
import { GroupComponent } from './pages/group/group.component';


const routes: Routes = [
  { path: 'school', component: SchoolComponent },
  { path: 'groupTemplate', component: GroupTemplateComponent },
  { path: 'group', component: GroupComponent },
  { path: '', pathMatch: 'full', redirectTo: 'school' },
  { path: '**', pathMatch: 'full', redirectTo: 'school' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
