import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  signal,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-site-analytics',
  standalone: false,
  templateUrl: './site-analytics.component.html',
  styleUrl: './site-analytics.component.scss',
})
export class SiteAnalyticsComponent implements OnInit, AfterViewInit {
  readonly panelOpenState = signal(false);
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas1') canvas1!: ElementRef<HTMLCanvasElement>;

  chart: any;
  chart2: any;

  constructor(private _homeServ: HomeService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chartFun();
    this.chartFun2();
  }

  chartFun() {
    if (this.canvas) {
      this.chart = new Chart(this.canvas.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }

  chartFun2() {
    if (this.canvas1) {
      this.chart2 = new Chart(this.canvas1.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange',
              ],
            },
          ],
        },
      });
    }
  }

  increment = () => {
    this._homeServ.increment();
  };
}
