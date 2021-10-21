import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent },
  {path:'search', component: SearchComponent },
  {path:'product/:id', component:ProductComponent },
  {path:'', pathMatch:'full', redirectTo:'home' },
  {path:'**', pathMatch:'full', redirectTo:'home' },

];

@NgModule({
  imports: [RouterModule.forRoot( routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
