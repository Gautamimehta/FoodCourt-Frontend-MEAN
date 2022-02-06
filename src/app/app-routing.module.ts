import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardsService } from './services/guards.service';
import { RoleGuard } from './services/role/role.guard';

// lazy loading example
const routes: Routes = [{
  // this path means landing page of the website
  path:'home', 
  loadChildren:()=>
    import ('./home/home.module').then(_ =>  _.HomeModule),
    canActivate: [GuardsService]
},
{
  path:'register',
  loadChildren:()=>
    import ('./register/register.module').then(_ =>  _.RegisterModule),
    // canActivate: [GuardsService]
},
{
  path:'dashboard',
  loadChildren:()=>
    import ('./dashboard/dashboard.module').then(_ =>  _.DashboardModule),
    canActivate: [GuardsService,RoleGuard]
},
{
  path:'contactus',
  loadChildren:()=>
    import ('./contactus/contactus.module').then(_ =>  _.ContactusModule),
    canActivate: [GuardsService]
},
{
  path:'aboutus',
  loadChildren:()=>
    import ('./aboutus/aboutus.module').then(_ =>  _.AboutusModule),
    canActivate: [GuardsService]
},
{
  path:'login',
  loadChildren:()=>
    import ('./login/login.module').then(_ =>  _.LoginModule),
    // canActivate: [GuardsService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
