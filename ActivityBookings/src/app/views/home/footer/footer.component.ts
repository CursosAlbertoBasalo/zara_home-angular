import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() public activitiesCount = 0;
  @Input() public favoritesCount = 0;
}
