import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private spacexService: SpacexService,
  ) { }

  launchDetail: any; 
  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params => {     
      const { id } = params;     
      this.spacexService.get(`launches/${id}`).subscribe((response: any) => {      
        this.launchDetail = response;
      });
    });
  }
}
