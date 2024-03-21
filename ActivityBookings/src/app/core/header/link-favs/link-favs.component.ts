import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-link-favs',
  templateUrl: './link-favs.component.html',
  styleUrls: ['./link-favs.component.css'],
})
export class LinkFavsComponent {
  @Input() public count: number = 0;
}
