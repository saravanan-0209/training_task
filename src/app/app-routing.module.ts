import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { PromComponent } from './prom/prom.component';

const routes: Routes = [
  { path :'child', component : ChildComponentComponent},
  { path : 'pipe', component : PipeComponent},
  { path : 'child1', component : ChildComponent},
  { path : 'prom', component : PromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
