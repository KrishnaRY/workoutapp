import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule,Router } from '@angular/router';
import { User } from '../_model/user';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule,RouterTestingModule,HttpModule,RouterModule],
         providers:[ LoginService,
         { provide: LoginService, useClass: LoginService }
         
         ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
