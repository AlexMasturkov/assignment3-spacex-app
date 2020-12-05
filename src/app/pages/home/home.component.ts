import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
  ) { }

  histories: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  
  getHistory() {
    this.spacexService.get('history').subscribe((response: any[]) => {
      console.log(response);
      this.histories = response;
        this.loading = false;
      }, (error: HttpErrorResponse) => {
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
    this.getHistory();
  }, 1000);
}

}

