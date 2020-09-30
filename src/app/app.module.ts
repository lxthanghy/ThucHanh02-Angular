import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: 'baimau',
    loadChildren: () =>
      import('./baimau/baimau.module').then((m) => m.BaimauModule),
  },
  {
    path: 'bai01',
    loadChildren: () =>
      import('./bai01/bai01.module').then((m) => m.Bai01Module),
  },
  {
    path: 'bai02',
    loadChildren: () =>
      import('./bai02/bai02.module').then((m) => m.Bai02Module),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
