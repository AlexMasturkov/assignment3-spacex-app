import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
  ) { }

  launches: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  getLaunches() {
    this.spacexService.get('launches/past').subscribe((response: any[]) => {
      console.log(response);
      this.launches = response;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 404) {
          // Do something specific to the 404 error
        }

        if (error.status === 403) {
          // Do something specific to the 403 error
        }

        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getLaunches();
    }, 1000);
  }

}



