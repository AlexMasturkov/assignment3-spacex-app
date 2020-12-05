import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
  ) { }

  rockets: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  getRockets() {
    this.spacexService.get('rockets').subscribe((response: any[]) => {
      console.log(response);
      this.rockets = response;
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
      this.getRockets();
    }, 1000);
  }

}
