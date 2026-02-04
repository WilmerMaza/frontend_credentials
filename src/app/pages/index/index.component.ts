import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  militaryPattern = 'assets/military-pattern.jpg';
  militaryEmblem = 'assets/military-emblem.png';

  constructor(private navigationService: NavigationService) {}

  navigateTo(path: string): void {
    this.navigationService.navigate(path);
  }
}

