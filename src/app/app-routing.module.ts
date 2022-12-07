import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PRegistComponent } from './components/p-regist/p-regist.component';
import { CRegistComponent } from './components/c-regist/c-regist.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';


const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'productos', component: PublicComponent },
  { path: 'perfil', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'public' },
  { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'producto' , component: ProductoComponent},
  { path: 'registroP', component: PRegistComponent},
  { path: 'registroC', component: CRegistComponent},
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'actualizar/:id', component: ActualizarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
