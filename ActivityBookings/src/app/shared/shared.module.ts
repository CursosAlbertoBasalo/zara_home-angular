import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParticipantPipe } from './pipes/participant.pipe';

/** Module with shared ui(components, pipes...) items */
@NgModule({
  declarations: [ParticipantPipe],
  imports: [CommonModule],
  exports: [ParticipantPipe],
})
export class SharedModule {}
