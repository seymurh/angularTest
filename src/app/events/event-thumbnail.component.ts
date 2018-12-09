import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    templateUrl:'event-thumbnail.component.html',
    styles:[`
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `]
    })
export class EventThumbnailComponent{
   @Input() event:any
   @Output() eventClickEmitter = new EventEmitter()

   fruit:any = "apple";

   eventClick = event =>{
     this.eventClickEmitter.emit("ayə!!!");
   }

   byeHappiness = event => {
       console.log("bye bye happiness!");
   }
}