import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import { ProfileComponent } from './user/profile.component';
import { userRoutes } from './user/user.routes';
import { LoginComponent } from './user/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[

    ]
})
export class UserModule{

}