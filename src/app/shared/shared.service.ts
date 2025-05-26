import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isStieAudit = new Subject<boolean>();
  isExpendMain = new BehaviorSubject<boolean>(false);
  constructor() {}
}
