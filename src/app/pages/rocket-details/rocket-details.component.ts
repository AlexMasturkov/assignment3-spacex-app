import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private spacexService: SpacexService,
  ) { }

  rocketDetail: any; 

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const { id } = params;
      console.log(id);
      
      this.spacexService.get(`rockets/${id}`).subscribe((response: any) => {
        console.log(response);
        this.rocketDetail = response;
      });

    });
  }

}
