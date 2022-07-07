import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizdisplayComponent } from './quizdisplay/quizdisplay.component';
import { QuizcontentsService } from '../app/quizcontents.service'
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ErrorComponent } from "./error/error.component";
import { GetstartedComponent } from './getstarted/getstarted.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { ReviewComponent } from './review/review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    QuizdisplayComponent,
    AboutComponent,
    ContactusComponent,
    CreateaccountComponent,
    ErrorComponent,
    GetstartedComponent,
    PrivacyComponent,
    QuizhomeComponent,
    ReviewComponent,
    ForgetpassComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

   
    
    


  ],
  providers: [QuizcontentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
