import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassingComponent } from './passing/passing.component';
import { GeneratorComponent } from './generator/generator.component';


const routes: Routes = [
  {path: 'generator', component: GeneratorComponent},
  {path: '**', component: PassingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
