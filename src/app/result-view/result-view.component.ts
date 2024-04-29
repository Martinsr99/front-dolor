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
  images: string[] = [];
  private subscription: Subscription;

  constructor(private resultsService: ResultsService) {
    this.subscription = this.resultsService.currentResults.subscribe({
      next: (data:any) => {
        this.images = Array.isArray(data.images) ? data.images : [];
        console.log('Results updated:', this.images);
      },
      error: (err) => {
        console.error('Error receiving results:', err);
        this.images = [];  // Reinicializa a un array vacío en caso de error.
      }
    });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up the subscription
  }

  downloadImage(imageUrl: string): void {
    window.open(imageUrl, '_blank');
  }
}