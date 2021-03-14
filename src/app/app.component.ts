import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICertificate } from './models/certificats';
import {IPagination} from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CertsApp';

  certificats: ICertificate[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
 
    this.http.get('https://localhost:5001/api/Certificates?pageSize=50').subscribe((response: IPagination) => {
      
      this.certificats = response.data; 

    }, error => {
      console.log(error);
    });

  }

}
