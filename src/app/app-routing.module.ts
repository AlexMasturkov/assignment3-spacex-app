import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { AboutComponent } from './pages/about/about.component';
import { RocketDetailsComponent } from './pages/rocket-details/rocket-details.component';
import { LaunchDetailsComponent } from './pages/launch-details/launch-details.component';




const routes: Routes = [
  {
    path: 'rockets',
    component: RocketsComponent,
  },
  {
    path: 'rockets/:id', // :id is a variable that is used for passing information through the url.
    component: RocketDetailsComponent,
  },
  {
    path: 'launches',
    component: LaunchesComponent,
  },
  {
    path: 'launches/:id', // :id is a variable that is used for passing information through the url.
    component: LaunchDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
