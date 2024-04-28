import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  file: File | null = null;

  constructor(private http: HttpClient, private resultsService: ResultsService) {}

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  uploadFile(): void {
    if (this.file) {
      const formData = new FormData();
      formData.append('pdf', this.file, this.file.name);

      this.http.post<string[]>('http://localhost:3000/imageToPdf', formData)
        .subscribe({
          next: (imageUrls) => {
            console.log('Éxito:', imageUrls);
            this.resultsService.setResults(imageUrls);
          },
          error: (error) => console.error('Error:', error)
        });
    } else {
      console.error('No file selected.');
    }
  }
}
