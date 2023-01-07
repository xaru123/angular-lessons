import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './pages/products/products.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
