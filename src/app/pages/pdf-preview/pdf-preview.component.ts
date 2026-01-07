import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css']
})
export class PDFPreviewComponent {
  militaryEmblem = 'assets/military-emblem.png';
  officerPhoto = 'assets/officer-photo.jpg';

  constructor(private navigationService: NavigationService) {}

  navigateTo(path: string): void {
    this.navigationService.navigate(path);
  }
}

