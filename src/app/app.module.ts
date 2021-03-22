import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { SignupComponent } from './components/Authentification/signup/signup.component';
import { SigninComponent } from './components/Authentification/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';
import { UserProfileModule } from './components/user-profile/user-profile.module';
import { HeaderComponent } from './header/header.component';
import { BookModule } from './components/book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    UserProfileModule,
    BookModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
