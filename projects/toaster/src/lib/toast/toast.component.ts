import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastMessage } from '../models/ToastMessage';
import { ToasterService } from '../toaster.service';
import { ToastMessageComponent } from '../toast-message/toast-message.component';

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule, ToastMessageComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  messages: ToastMessage[] = [];
  idCounter = 0;

  get positionClass(): string {
    return this.messages.length > 0
      ? this.messages[this.messages.length - 1].position
      : 'top-right';
  }

  constructor(private toasterService: ToasterService) {
    this.toasterService.getMessages().subscribe((message: ToastMessage) => {
      if (message) {
        const toast: ToastMessage = {
          id: this.idCounter++,
          text: message.text,
          type: message.type,
          duration: message.duration,
          position: message.position || 'top-right',
        };

        this.addToast(toast);
        setTimeout(() => this.removeToast(toast.id), toast.duration || 5000);
      }
    });
  }

  addToast(toast: ToastMessage) {
    this.messages.push(toast);
  }

  getIcon(type: 'success' | 'error' | 'warning'): string {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
        return 'fas fa-exclamation-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      default:
        return '';
    }
  }

  removeToast(id: number) {
    const toastIndex = this.messages.findIndex((message) => message.id === id);
    if (toastIndex !== -1) {
      const toastElement = document.querySelector(
        `.toast:nth-child(${toastIndex + 1})`
      );
      if (toastElement) {
        toastElement.classList.add('toast-message-exit');
        setTimeout(() => {
          this.messages = this.messages.filter((message) => message.id !== id);
        }, 300);
      }
    }
  }

  hasPosition(position: string): boolean {
    return this.messages.some((message) => message.position === position);
  }
}
