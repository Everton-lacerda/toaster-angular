import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { positionToast, ToastMessage, typeToast } from './models/ToastMessage';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private messageSubject = new Subject<ToastMessage>();

  public getMessages(): Observable<ToastMessage> {
    return this.messageSubject.asObservable();
  }

  showToast(
    message: string,
    type: typeToast,
    duration: number = 5000,
    position: positionToast = 'top-right'
  ) {
    this.messageSubject.next({ id: 0, text: message, type, duration, position });
  }
}
