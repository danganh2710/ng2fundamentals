import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    NavComponent,
    EventsAppComponent,
    EventService,
    ToastrService,
    appRoutes,
    Error404Component,
    UserAuthService
} from './index'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
        UserAuthService,
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