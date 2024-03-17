import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { routeGuard } from './route.guard';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {title: 'Home', path: '', component: HomeComponent, data: {animation: 'home'}},
    {title: 'Signup', path:'signup', component: SignupComponent, data: {animation:'signup'}},
    {title: 'Login', path: 'login', component: LoginComponent, data: {animation: 'login'}},
    {title: 'Profile', path: 'profile', component: ProfileComponent, data: {animation: 'profile'}, canActivate: [routeGuard]},
    {title: 'Not-found Page', path: '**', component: NotPageFoundComponent, data: {animation: 'not-found'}}
];