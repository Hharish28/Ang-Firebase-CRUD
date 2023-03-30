import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentUpdateComponent } from './pages/student-update/student-update.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "student/list",
    component : StudentListComponent
  },
 
  {
    path : "edit/:docId",
    component : StudentUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
