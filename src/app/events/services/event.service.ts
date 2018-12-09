import {Injectable} from '@angular/core'
import {events} from '../../data'
import {Subject, Observable} from 'rxjs'
import { IEvent } from '../event.model';

@Injectable()
export class EventService{
    getEvents():Observable<IEvent[]>{
        let subject = new Subject<IEvent[]>();
        setTimeout(() => { subject.next(events); subject.complete();}, 300);
        return subject;
    }

    getEvent(id:Number):IEvent{
        return events.find(e => e.id === id);
    }
}