import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PropertiesComponent } from './components/properties/properties.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: CreateAccountComponent},
  { path: 'users/:id/properties', component: PropertiesComponent},
  { path: 'users/:id/properties/create', component: CreatePropertyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
