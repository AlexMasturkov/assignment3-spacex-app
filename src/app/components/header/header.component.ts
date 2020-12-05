import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title: string = 'Hello SpaceX ';

  // Reference to the menu that we will accept into our header component
  // and through this @Input() menu property, bind it to our HTML.
  @Input() menu: any;

  ngOnInit(): void {
  }

}
