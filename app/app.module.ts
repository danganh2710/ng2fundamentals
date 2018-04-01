import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsListComponent } from './events/events-list.compenent';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/navbar.component';
import { EventsAppComponent } from './app.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/taostr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent, 
        NavComponent,
        EventDetailsComponent,
        CreateEventComponent,   
        Error404Component
    ],
    providers: [
        EventService, 
        ToastrService, 
        EventRouteActivator, 
        {
            provide:'canDeactivateCreateEvent', useValue:checkDirtySate
        },
        EventListResolver
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtySate(createComponent:CreateEventComponent)
{
    if(createComponent.isDirtyState)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}