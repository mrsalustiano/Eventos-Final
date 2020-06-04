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
import { ClientesCreateComponent } from './components/cliente/clientes-create/clientes-create.component';
import { ClientesUpdateComponent } from './components/cliente/clientes-update/clientes-update.component';
import { ClientesDeleteComponent } from './components/cliente/clientes-delete/clientes-delete.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { VendaCreateComponent } from './components/venda/venda-create/venda-create.component';

const routes: Routes = [
  { path: "products", component: ProductCrudComponent},
  { path: "products/create", component: ProductCreateComponent},
  { path: "products/update/:id", component: ProductUpdateComponent},
  { path: "products/delete/:id", component: ProductDeleteComponent},
  { path: "clientes", component: ClienteCrudComponent},
  { path: "clientes/create", component: ClientesCreateComponent},  
  { path: "clientes/update/:id", component: ClientesUpdateComponent},
  { path: "clientes/delete/:id", component: ClientesDeleteComponent},
 
  { path: "eventos", component: EventoCrudComponent},
  { path: "eventos/create", component: EventoCreateComponent},  
  { path: "eventos/update/:id", component: EventoUpdateComponent},
  { path: "eventos/delete/:id", component: EventoDeleteComponent},

 
  { path: "casas", component: CasaCrudComponent},
  { path: "casas/create", component: CasaCreateComponent},  
  { path: "casas/update/:id", component: CasaUpdateComponent},
  { path: "casas/delete/:id", component: CasaDeleteComponent},

  { path: "vendas", component: VendaCrudComponent},
  { path: "vendas/create", component: VendaCreateComponent},  
  
  { path: "" , component: HomeComponent },
  { path: "**" , redirectTo: '' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
