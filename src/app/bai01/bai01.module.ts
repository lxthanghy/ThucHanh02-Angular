import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bai01Component } from './bai01.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: Bai01Component,
  },
];
@NgModule({
  declarations: [
    Bai01Component,
    NavbarComponent,
    BreadcrumbComponent,
    CategoryComponent,
    ProductListComponent,
    ProductListItemComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Bai01Module {}
