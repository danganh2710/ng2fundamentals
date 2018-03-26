import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ToastrService } from "../common/taostr.service";

@Component({
  templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events
  constructor(private eventService:EventService, private toarstrService: ToastrService){}
  ngOnInit(): void {
      this.events = this.eventService.getEvents();
  }

  handleClickThumbnail(eventName){
    this.toarstrService.success(eventName);
  }
}