import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isExpendedWidth?: boolean;
  constructor(private _sharedServ: SharedService) {
    this._sharedServ.isExpendMain.subscribe((res) => {
      this.isExpendedWidth = res;
    });
  }
  title = 'AIMarketing';
}
