import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../../shared/event.service";
import { Injectable } from "@angular/core";

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private router: Router, private eventService: EventService){

    }
    canActivate(route: ActivatedRouteSnapshot){
        let canActivate = !!this.eventService.getEvent(+route.params['id']);
        if(!canActivate)
            this.router.navigate(["/404"]);
        return canActivate;
    }
}