import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  countEle?: number;
  isOpen: boolean = false;
  constructor(private _router: Router, private _homeServ: HomeService) {
    this.countEle = this._homeServ.count();
  }
  saveWebClicked = () => {
    this._router.navigateByUrl('/home/dashboard');
  };
  ngAfterViewInit(): void {
    this.isOpen = true;
  }

  openGame() {
    window.open('https://www.crazygames.com/game/night-city-racing', '_blank');
  }
}
