import { Component, OnInit } from '@angular/core';
import { PersonaDummy } from './dummy';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: PersonaDummy[] = [];
  displayedColumns: string[] = ['nombre', 'apellido'];
  isLoadingResults = true;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getDummy();
  }

  getDummy(): void {
    console.log('HomeComponent.getDummy()');
    this.homeService.getDummy().subscribe(dummys => {
      this.data = dummys;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
