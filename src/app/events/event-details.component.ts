import {Component, OnInit} from '@angular/core'
import { EventService } from './services/event.service'
import {ActivatedRoute} from '@angular/router'
import { IEvent } from './event.model';

@Component({
    templateUrl:'event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        `]
})
export class EventDetailsComponent implements OnInit{

    event:IEvent
    
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute){
    }

    ngOnInit(){
        const {id } = this.activatedRoute.snapshot.params;
        this.event = this.eventService.getEvent(+id);
    }
}