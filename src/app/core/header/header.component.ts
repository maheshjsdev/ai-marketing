import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private _sharedServ: SharedService) {}
  leftbarToggle = () => {
    this._sharedServ.isExpendMain.next(!this._sharedServ.isExpendMain.value);
  };
}
