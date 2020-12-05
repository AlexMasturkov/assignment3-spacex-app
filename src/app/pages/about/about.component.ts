import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
  ) { }

  company: any;

  ngOnInit(): void {
    this.spacexService.get('company').subscribe((response: any) => {
      console.log(response);
      this.company = response;
    });
  }
}
