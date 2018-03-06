import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { WorkoutComponent } from './workout/index';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
     { path: 'workout/:userId', component: WorkoutComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);