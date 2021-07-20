import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent2 {
  title = 'ang-cy-cov-example';

  ciao() {
    const a = 99;
  }
}
