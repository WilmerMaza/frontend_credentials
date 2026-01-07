import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  navigateBack(): void {
    window.history.back();
  }
}

