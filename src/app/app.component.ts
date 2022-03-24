import { Component } from '@angular/core';
declare var Tooltip;
declare var Accordion;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roobie-angular-starter';
  constructor() {
    Tooltip.check();
    Accordion.check();
  }
}

