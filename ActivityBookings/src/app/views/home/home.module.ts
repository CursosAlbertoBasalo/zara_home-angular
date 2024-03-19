import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActivitiesComponent } from './activities/activities.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeComponent, ActivitiesComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
