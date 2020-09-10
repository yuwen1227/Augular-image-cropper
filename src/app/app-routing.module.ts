import { SignaturedComponent } from './signatured/signatured.component';
import { ImageComponent } from './image/image.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'image', component: ImageComponent },
  // { path: 'signatured', component: SignaturedComponent, }
  { path: '', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
