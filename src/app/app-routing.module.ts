import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CarPageComponent} from './car-page/car-page.component';

const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarsPageComponent,
    children: [
      { path: ':id/:name', component: CarPageComponent }
    ]
  },
  {
    path: '',
    component: HomePageComponent
  }
  // {
  //   path: 'cars/:id',
  //   component: CarPageComponent
  // },
  // { path: 'cars/:id/:name', component: CarPageComponent }
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
