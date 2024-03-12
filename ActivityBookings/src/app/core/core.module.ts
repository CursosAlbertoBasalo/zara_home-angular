import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

/** A module that holds one time used items(layout components, services...) */
@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
