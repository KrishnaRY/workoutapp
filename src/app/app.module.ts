import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent,LoginService } from './login/index';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';
import { WorkoutComponent,WorkoutService } from './workout/index';
import { RegisterComponent,RegisterService } from './register/index'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkoutComponent,
    RegisterComponent
  ],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [LoginService,WorkoutService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
