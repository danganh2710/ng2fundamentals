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
        EventDetailsComponent        
    ],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}