import { Component } from '@angular/core';

@Component({
    selector: 'event-app',
    template: `
    <event-nav></event-nav>
    <router-outlet></router-outlet>`
})
export class EventsAppComponent {

}