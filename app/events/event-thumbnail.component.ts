import { Component, Input } from "@angular/core";
import { IEvent } from "..";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: IEvent

    getTimeClass(): any {
        if (this.event && this.event.time === "8:00 am") {
            return ['green']
        }

        return [];
    }
}