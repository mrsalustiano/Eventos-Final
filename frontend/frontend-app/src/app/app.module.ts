import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'

import { FormsModule} from '@angular/forms'


import { HttpClientModule } from '@angular/common/http'

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { RedDirective } from './directives/red.directive';
import { MatTableModule } from '@angular/material/table';

import { MatSelectModule } from '@angular/material/select';

import localePT from '@angular/common/locales/pt';
import  { registerLocaleData } from '@angular/common';
import { CasaCrudComponent } from './views/casa-crud/casa-crud.component';
import { VendaCrudComponent } from './views/venda-crud/venda-crud.component';
import { ClientesUpdateComponent } from './components/cliente/clientes-update/clientes-update.component';
import { ClientesDeleteComponent } from './components/cliente/clientes-delete/clientes-delete.component';
import { ClientesReadComponent } from './components/cliente/clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './components/cliente/clientes-create/clientes-create.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { CasaReadComponent } from './components/casa/casa-read/casa-read.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { VendaReadComponent } from './components/venda/venda-read/venda-read.component';
import { VendaCreateComponent } from './components/venda/venda-create/venda-create.component';
import { FotoCasaComponent } from './components/casa/foto-casa/foto-casa.component';
import { FotoEventoComponent } from './components/evento/foto-evento/foto-evento.component';



registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,

    RedDirective,
    CasaCrudComponent,
    VendaCrudComponent,
    ClientesUpdateComponent,
    ClientesDeleteComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    CasaUpdateComponent,
    CasaDeleteComponent,
    CasaReadComponent,
    CasaCreateComponent,
    EventoUpdateComponent,
    EventoDeleteComponent,
    EventoReadComponent,
    EventoCreateComponent,
    ClienteCrudComponent,
    EventoCrudComponent,
    VendaReadComponent,
    VendaCreateComponent,
    FotoCasaComponent,
    FotoEventoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
