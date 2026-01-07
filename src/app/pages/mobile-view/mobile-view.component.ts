import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent {
  militaryEmblem = 'assets/military-emblem.png';
  officerPhoto = 'assets/officer-photo.jpg';

  constructor(private navigationService: NavigationService) {}

  navigateTo(path: string): void {
    this.navigationService.navigate(path);
  }
}

