import { VendaCrudComponent } from './views/venda-crud/venda-crud.component';
import { CasaCrudComponent } from './views/casa-crud/casa-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from  './views/product-crud/product-crud.component';

const routes: Routes = [
  { path: "products", component: ProductCrudComponent},
  { path: "products/create", component: ProductCreateComponent},
  { path: "products/update/:id", component: ProductUpdateComponent},
  { path: "products/delete/:id", component: ProductDeleteComponent},
  { path: "clientes", component: ClienteCrudComponent},
  { path: "eventos", component: EventoCrudComponent},
  { path: "casas", component: CasaCrudComponent},
  { path: "vendas", component: VendaCrudComponent},
  { path: "" , component: HomeComponent },
  { path: "**" , redirectTo: '' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
