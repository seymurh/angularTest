import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import { ProfileComponent } from './user/profile.component';
import { userRoutes } from './user/user.routes';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent
    ],
    providers:[

    ]
})
export class UserModule{

}