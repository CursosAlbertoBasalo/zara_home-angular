import { Component } from '@angular/core';
import { ACTIVITIES } from '../shared/models/activities.data';
import { Activity } from '../shared/models/activity.type';

@Component({
  selector: 'lab-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  public activity: Activity = ACTIVITIES[1];

  public currentParticipants: number = 3;
}
