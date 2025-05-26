import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-leftbar',
  standalone: false,
  
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.scss'
})
export class LeftbarComponent {
  readonly panelOpenState = signal(false);
}
