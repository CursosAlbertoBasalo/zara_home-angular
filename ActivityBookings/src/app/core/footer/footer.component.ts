import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  author = {
    name: 'Alberto Basalo',
    url: 'https://albertobasalo.dev',
  };

  year = '';

  constructor() {
    console.log('construir footer');
    this.author = { ...this.author, name: 'Ivan' };
    this.year = this.getYear().toLocaleString();
  }

  getYear() {
    console.log('calculando año');
    return new Date().getFullYear();
  }

  onAcceptCookiesClick() {
    console.log('cookies accepted');
  }
}
