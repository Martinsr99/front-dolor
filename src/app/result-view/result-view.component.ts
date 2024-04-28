import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsService } from '../results.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss'],
})
export class ResultViewComponent implements OnDestroy {
  results: string[] = [];
  private subscription: Subscription;

  constructor(private resultsService: ResultsService) {
    this.subscription = this.resultsService.currentResults.subscribe(results => {
      this.results = results;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Limpiar la suscripción
  }

  downloadImage(imageUrl: string): void {
    window.open(imageUrl, '_blank');
  }
  
}