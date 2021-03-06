import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventService } from "../shared/event.service";
import { IEvent } from "..";

@Injectable()
export class EventListResolver implements Resolve<IEvent> {
    constructor(private eventService: EventService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getEvents().map(events=>events);
    }
}