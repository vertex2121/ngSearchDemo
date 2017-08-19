import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component'
import { SearchComponent } from './search/search.component'
import { ItemResolver } from './item-resolver.service'

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'result/:id', component: ResultComponent, resolve: {item: ItemResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ItemResolver]
})
export class AppRoutingModule { }
