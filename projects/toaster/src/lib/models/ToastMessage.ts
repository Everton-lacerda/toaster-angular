export interface ToastMessage {
  id: number;
  text: string;
  type: typeToast;
  duration?: number;
  position: positionToast;
}

export type typeToast = 'success' | 'error' | 'warning';
export type positionToast =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'center-center'
  | 'center-top';
