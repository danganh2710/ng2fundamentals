import { Component } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";
import { Router } from "@angular/router";

@Component({
    templateUrl: "app/events/create-event.component.html",
    styleUrls: ["app/events/create-event.component.html"]
})
export class CreateEventComponent {
    isDirtyState:boolean=true;
    constructor(private router: Router) {

    }
    cancel() {
        this.router.navigate(["/events"])
    }
}