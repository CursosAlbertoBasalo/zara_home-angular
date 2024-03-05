import { Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  author = {
    name: 'Alberto',
    url: 'https://albertobasalo.dev',
  };

  getYear() {
    return new Date().getFullYear();
  }

  onAcceptCookiesClick() {
    console.log('cookies accepted');
  }
}
