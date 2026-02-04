import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IDCardComponent {
  militaryPattern = 'assets/military-pattern.jpg';
  militaryEmblem = 'assets/military-emblem.png';
  officerPhoto = 'assets/officer-photo.jpg';

  constructor(private navigationService: NavigationService) {}

  navigateTo(path: string): void {
    this.navigationService.navigate(path);
  }
}

