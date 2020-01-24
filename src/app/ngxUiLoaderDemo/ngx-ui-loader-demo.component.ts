import { Component, OnInit } from '@angular/core';

// import { NgxUiLoaderDemoService } from '../providers/ngx-ui-loader-demo.service';
import { HttpClient } from '@angular/common/http';

const LOGO_URL = 'https://raw.githubusercontent.com/t-ho/ngx-ui-loader/master/src/assets/angular.png';

@Component({
  selector: 'app-ngx-ui-loader-demo',
  templateUrl: './ngx-ui-loader-demo.component.html',
  styleUrls: ['./ngx-ui-loader-demo.component.scss']
})
export class NgxUiLoaderDemoComponent implements OnInit {
  // spinnerTypes: string[];
  // positions: string[];
  // directions: string[];

  disabled: boolean;

  // loader: Loader;

  /**
   * Constructor
   * @param ngxUiLoaderService
   * @param demoService
   */
  constructor(
    private http: HttpClient) {
  }

  /**
   * On init
   */
  ngOnInit() {
  //   this.spinnerTypes = Object.keys(SPINNER).map(key => SPINNER[key]);
  //   this.positions = Object.keys(POSITION).map(key => POSITION[key]);
  //   this.directions = Object.keys(PB_DIRECTION).map(key => PB_DIRECTION[key]);

    this.disabled = false;
  //   this.loader = this.ngxUiLoaderService.getLoader();
  }

  

    /**
   * Add logo url
   * @param checked
   */


  /**
   * Toggle progress bar
   * @param checked
   */
  

  /**
   * Reset the form
   */


  getDownloadStats() {
    this.disabled = true;
    this.http.get(`https://jsonplaceholder.typicode.com/photos`).subscribe((res: any) => {
      console.log(res);
      this.disabled = false;
    });
  }
}
