import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ToastConfig {
  title?: string;
  description?: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  show(config: ToastConfig): void {
    const message = config.title || config.description || 'Notificación';
    this.snackBar.open(message, 'Cerrar', {
      duration: config.duration || 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  success(message: string, duration: number = 3000): void {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-toast']
    });
  }

  error(message: string, duration: number = 5000): void {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-toast']
    });
  }
}

