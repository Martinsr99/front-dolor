import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FileUploadComponent,ResultViewComponent,HttpClientModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-dolor';
}
