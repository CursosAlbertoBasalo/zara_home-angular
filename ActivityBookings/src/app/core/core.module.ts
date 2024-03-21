import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LinkFavsComponent } from './header/link-favs/link-favs.component';

/** A module that holds one time used items(layout components, services...) */
@NgModule({
  declarations: [FooterComponent, HeaderComponent, LinkFavsComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
