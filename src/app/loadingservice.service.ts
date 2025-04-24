// src/app/loading-tips.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { LOADING_TIPS } from './loading-tips';

@Injectable({ providedIn: 'root' })
export class LoadingTipsService {
  private tips = LOADING_TIPS;
  private sub: Subscription | null = null;
  private tipSubject = new BehaviorSubject<string>(this.tips[0]);
  tip$ = this.tipSubject.asObservable();

  start(intervalMs = 3000) {
    if (this.sub) { return; }                // already running
    this.sub = interval(intervalMs).subscribe(() => {
      const next = Math.floor(Math.random() * this.tips.length);
      this.tipSubject.next(this.tips[next]);
    });
  }

  stop() {
    this.sub?.unsubscribe();
    this.sub = null;
  }
}
