import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DealersComponent } from './dealers/dealers.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { CommunityComponent } from './community/community.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';



const routes: Routes =[
  {
    path:"",
    redirectTo:'',
    pathMatch:'full',
  },
  {
    path:"Dealers",
    component:DealersComponent
  },  
  {
    path:"Marketplace",
    component:MarketplaceComponent
  },
  {
    path:"commuity",
    component:CommunityComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signin",
    component:SignupComponent
  },
  {
    path:"Appfooter",
    component:AppfooterComponent
  },
  {
    path:"Appheader",
    component:AppheaderComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    MarketplaceComponent,
    CommunityComponent,
    LoginComponent,
    SignupComponent,
    AppheaderComponent,
    AppfooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
