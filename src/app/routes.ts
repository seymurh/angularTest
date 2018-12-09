import {Routes} from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error.404.component';
import { EventRouteActivator } from './events/services/event-route-activator.service';
import { EventsListResolver } from './events/services/events-list-resolver.service';

export const routes:Routes = [
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ["CanDeactivate"]},
    {path:'events/:id', component:EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path:'user', loadChildren:'./user.module#UserModule'},
    {path:'', redirectTo: '/events', pathMatch: 'full'}
]