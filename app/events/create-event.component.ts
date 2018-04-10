import { Component } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";
import { Router } from "@angular/router";
import { IEvent } from "../shared/index";
import {EventService} from "../shared/index"

@Component({
    templateUrl: "app/events/create-event.component.html",
    styleUrls: ["app/events/create-event.component.html"]
})
export class CreateEventComponent {
    isDirtyState:boolean=true;
    newEventForm:IEvent;
    constructor(private router: Router, private authService:EventService) {

    }

    saveEvent(newEvent){
        console.log(newEvent);
        this.isDirtyState = false;
        this.authService.saveEvent(newEvent);
        this.router.navigate(["/events"])
    }
    
    cancel() {
        this.router.navigate(["/events"])
    }
}