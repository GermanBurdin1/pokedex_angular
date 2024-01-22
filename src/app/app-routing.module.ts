import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { LayoutErrorComponent } from './layouts/layout-error/layout-error.component';

export const routes: Routes = [
	{ path: '', component: LayoutMainComponent, pathMatch: 'full' },
	{ path: '**', component: LayoutErrorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
