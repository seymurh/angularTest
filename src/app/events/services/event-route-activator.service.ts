import {Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import {Injectable} from "@angular/core"
import {EventService} from './event.service'

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService:EventService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const {id} = route.params;
        const eventExists = !! this.eventService.getEvent(+id);

        if(!eventExists){
            this.router.navigate(["/404"]);
        }

        return eventExists;
    }
}