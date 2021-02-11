import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-ngx-ui-loader-demo',
  templateUrl: './ngx-ui-loader-demo.component.html',
  styleUrls: ['./ngx-ui-loader-demo.component.scss']
})
export class NgxUiLoaderDemoComponent implements OnInit {
  disabled: boolean;
  constructor(
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  load_service() : Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos`).pipe(
      map(response => {
        
        return response;
      } ),
      catchError(error => {
        return of(error);
      })
    );
    // this.http.get(`https://jsonplaceholder.typicode.com/photos`).subscribe((res: any) => {
    //   console.log(res);
    // });
  }
  getDownloadStats() {
    this.load_service().subscribe(x=>{
      console.log(x)
    })
  }
}
