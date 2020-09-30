import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bai02Component } from './bai02.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { BannerComponent } from './banner/banner.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { FromBlogComponent } from './from-blog/from-blog.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: Bai02Component,
  },
];

@NgModule({
  declarations: [Bai02Component, HeaderComponent, HeroComponent, CategoriesComponent, FeaturedComponent, BannerComponent, LatestProductComponent, FromBlogComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Bai02Module {}
