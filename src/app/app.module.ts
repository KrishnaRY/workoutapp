import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';
import { WorkoutComponent } from './workout/index';
import { RegisterComponent } from './register/index';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';
import { WorkouttransactionsListComponent } from './workouttransactionslist/workouttransactionslist.component';
import { WorkouttransactionsComponent } from './workouttransactions/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkoutComponent,
    RegisterComponent,
    WorkoutlistComponent,
    WorkouttransactionsListComponent,
    WorkouttransactionsComponent
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
