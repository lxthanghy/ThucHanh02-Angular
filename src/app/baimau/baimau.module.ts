import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaimauRoutingModule } from './baimau-routing.module';
import { BaimauComponent } from './baimau.component';
import { MenuComponent } from './menu/menu.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path: '',
    component: BaimauComponent,
  },
];
@NgModule({
  declarations: [
    BaimauComponent,
    MenuComponent,
    ManufacturerComponent,
    ProductComponent,
  ],
  imports: [CommonModule, BaimauRoutingModule, RouterModule.forChild(routes)],
})
export class BaimauModule {}
