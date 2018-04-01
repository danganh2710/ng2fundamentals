import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ToastrService } from "../common/taostr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "..";

@Component({
  templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events:IEvent;
  constructor(private eventService:EventService, private toarstrService: ToastrService, private route: ActivatedRoute){}
  ngOnInit(): void {
      this.events = this.route.snapshot.data['events'];
  }

  handleClickThumbnail(eventName){
    this.toarstrService.success(eventName);
  }
}