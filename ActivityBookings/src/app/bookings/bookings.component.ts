import { Component } from '@angular/core';
import { ACTIVITIES } from '../shared/models/activities.data';
import { Activity } from '../shared/models/activity.type';

@Component({
  selector: 'lab-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  public activity: Activity = ACTIVITIES[3];

  public currentParticipants: number = 2;

  public newParticipants: number = 1;

  public totalParticipants: number =
    this.currentParticipants + this.newParticipants;

  public maxNewParticipants: number =
    this.activity.maxParticipants - this.currentParticipants;

  public booked: boolean = false;

  public getDisableBookingButton(): boolean {
    return this.booked || this.newParticipants === 0;
  }

  // public getTotalParticipants(): number {
  //   return this.currentParticipants + this.newParticipants;
  // }

  public onNewParticipantsChange(event: any) {
    const input: HTMLInputElement = event.target;
    const value = input.value;
    console.log('el input ha cambiado', value);
    this.newParticipants = parseInt(value, 10);
    this.totalParticipants = this.currentParticipants + this.newParticipants;
    //this.disableBookingButton = this.newParticipants === 0;
  }

  public onBookClick() {
    console.log('Reservar actividad', this.totalParticipants);
    this.booked = true;
    if (this.totalParticipants === this.activity.maxParticipants) {
      this.activity.status = 'sold-out';
      return;
    }
    if (this.totalParticipants > this.activity.minParticipants) {
      this.activity.status = 'confirmed';
      return;
    }
  }
}
