import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private resultsSource = new BehaviorSubject<string[]>([]);
  currentResults = this.resultsSource.asObservable();

  constructor() { }

  setResults(results: string[]): void {
    this.resultsSource.next(results);
  }
}