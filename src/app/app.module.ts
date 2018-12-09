import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { 
  EventsListComponent, 
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events'

import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { Error404Component } from './errors/error.404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    {provide:"CanDeactivate", useValue: checkDirtyState},
    EventsListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(createEventComponent:CreateEventComponent){
  if(createEventComponent.isDirty)
    return window.confirm("You have not saved this event, do you really want to cancel?");
  return true;
}