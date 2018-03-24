import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsListComponent } from './events/events-list.compenent';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/navbar.component';
import { EventsAppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavComponent],
    bootstrap:[EventsAppComponent]
})
export class AppModule {

}