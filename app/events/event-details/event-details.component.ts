import { Component, OnInit } from "@angular/core";
import { EventService, IEvent } from "../../shared/index";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params['id']
        );
    }
}