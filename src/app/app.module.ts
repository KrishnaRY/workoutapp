import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent,LoginService } from './login/index';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';
import { WorkoutComponent } from './workout/workout.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkoutComponent
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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
