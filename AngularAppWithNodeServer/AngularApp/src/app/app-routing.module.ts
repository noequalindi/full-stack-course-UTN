import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"catalogo-productos",component:CatalogoComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"producto/:id",component:ProductoDetalleComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
