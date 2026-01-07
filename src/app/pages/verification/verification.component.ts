import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  militaryPattern = 'assets/military-pattern.jpg';
  militaryEmblem = 'assets/military-emblem.png';
  officerPhoto = 'assets/officer-photo.jpg';
  isScanning = false;
  verificationResult: 'valid' | 'invalid' | null = null;
  verificationDate: string = new Date().toLocaleString();

  constructor(private navigationService: NavigationService) {}

  handleScan(): void {
    this.isScanning = true;
    // Simulate scanning
    setTimeout(() => {
      this.isScanning = false;
      this.verificationResult = 'valid';
      this.verificationDate = new Date().toLocaleString();
    }, 2000);
  }

  resetVerification(): void {
    this.verificationResult = null;
  }

  navigateTo(path: string): void {
    this.navigationService.navigate(path);
  }
}

