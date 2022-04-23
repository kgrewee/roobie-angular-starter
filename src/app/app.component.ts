import { AfterViewInit, Component } from '@angular/core';
declare var Tooltip;
declare var Accordion;
declare var Carousel;
declare var Navbar;
declare var Select;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'roobie-angular-starter';
  constructor() {
  }
  ngAfterViewInit(): void {
    Tooltip.check();
    Accordion.check();
    Carousel.check();
    Navbar.check();
    Select.check();
  }
}

