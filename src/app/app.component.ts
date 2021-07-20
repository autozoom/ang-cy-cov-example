import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-cy-cov-example';

  constructor() { this.ciao(); AppComponent.ciao2();}

  ciao() {
    const a = 99;
  }
  ciao1() {
    const a = 99;
  }
  static ciao2() {
    const a = 99;
  }
  ciao3() {
    const a = 99;
  }
  ciao3444() {
    const a = 99;
  }
}
