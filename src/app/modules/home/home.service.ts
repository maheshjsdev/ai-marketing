import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  count = signal(0);
  constructor() {}

  increment = () => {
    this.count.set(this.count() + 1);
  };
}
