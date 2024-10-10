# Toaster-Angular

[![npm version](https://badge.fury.io/js/toaster-angular.svg)](https://www.npmjs.com/package/toaster-angular) ![npm downloads](https://img.shields.io/npm/dt/toaster-angular.svg) ![License](https://img.shields.io/npm/l/toaster-angular.svg)

Toaster-Angular is a lightweight, customizable, and responsive toast notification library built for Angular applications. It allows developers to easily display alert messages (success, error, info, etc.) in various positions on the screen with animations and close actions.

## Features

- **Customizable:** Modify the position, type, and message content with ease.
- **Lightweight:** Minimal footprint for quick setup and fast performance.
- **Animated:** Smooth animations for entering and exiting toast notifications.
- **Responsive:** Works well on both mobile and desktop screens.
<!-- - **Custom Icons:** Add different icons based on the toast type (success, error, info, etc.). -->

## Installation

To get started with `toaster-angular`, you can install it via npm:

```bash
npm install toaster-angular

Usage
To start using Toaster-Angular, follow the steps below.

Step 1: Import the Module
You need to import ToasterModule in your Angular application.

import { ToasterModule } from 'toaster-angular';

@NgModule({
  imports: [ToasterModule]
})
export class AppModule {}

Add ToasterModule to your imports array in the app module configuration.

@NgModule({
  imports: [ToasterModule]
})
export class AppModule {}

Step 2: Displaying Toasts
Use the ToasterService to display toast notifications.

constructor(private toasterService: ToasterService) {}

showToast() {
  this.toasterService.showToast({
    text: 'This is a success message!',
    type: 'success'
  });
}

Step 3: Customize Toast Position
You can set the toast notification position on the screen by providing the position option.

this.toasterService.showToast({
  text: 'This is an info message!',
  type: 'info',
  position: 'top-right'
});

Available positions:

top-left
top-right
bottom-left
bottom-right
center
Step 4: Toast Types
You can customize the toast based on the type. Supported types include:

success
error
info
The library will apply different styles and icons depending on the type of toast.

this.toasterService.showToast({
  text: 'Operation completed successfully!',
  type: 'success'
});

this.toasterService.showToast({
  text: 'Something went wrong!',
  type: 'error'
});

Step 5: Dismiss and Auto-Close
Each toast can be configured to auto-dismiss after a specified duration, or users can manually dismiss it by clicking a close button.

this.toasterService.showToast({
  text: 'This message will disappear in 5 seconds!',
  type: 'info',
  autoClose: true,
  duration: 5000
});


Development
If you want to contribute to the project or modify it for your own use, clone the repository and install the dependencies:

git clone https://github.com/yourusername/toaster-angular.git
cd toaster-angular
npm install

To build the project:
npm run build

License
This project is licensed under the MIT License. See the LICENSE file for more details.
