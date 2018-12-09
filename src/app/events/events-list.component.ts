import {Component, OnInit} from '@angular/core'
import { EventService } from './services/event.service';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from './event.model';

@Component({
    templateUrl:'events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events:IEvent[]

    constructor(private eventService:EventService, private route:ActivatedRoute){
       
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events'];
    }
   
    thumbnailClick = event => {
        console.log(event);
    }
}