import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss',
})
export class ToastMessageComponent {
  @Input() message: any;
  @Output() close = new EventEmitter<void>();

  getIcon(type: string): string {
    switch (type) {
      case 'success':
        return '✔️';
      case 'error':
        return '❌';
      case 'info':
        return 'ℹ️';
      default:
        return '';
    }
  }

  closeToast() {
    this.close.emit();
  }
}
