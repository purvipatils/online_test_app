import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuizdisplayComponent } from './quizdisplay/quizdisplay.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { ErrorComponent } from "./error/error.component";
import { GetstartedComponent } from './getstarted/getstarted.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quizdisplay', component: QuizdisplayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'create', component: CreateaccountComponent },
  { path: 'forget', component: ForgetpassComponent },
  { path: 'getstart', component: GetstartedComponent },
  { path:'privacy',component:PrivacyComponent},
  { path:'review',component:ReviewComponent},
  { path:'quizhome',component:QuizhomeComponent},
  { path: '**', component: ErrorComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
