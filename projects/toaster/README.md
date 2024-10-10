# Toaster

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Code scaffolding

Run `ng generate component component-name --project toaster` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project toaster`.

> Note: Don't forget to add `--project toaster` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build toaster` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build toaster`, go to the dist folder `cd dist/toaster` and run `npm publish`.

## Running unit tests

Run `ng test toaster` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<button (click)="showSuccess()">Show Success</button>
<button (click)="showError()">Show Error</button>
<button (click)="showWarning()">Show Warning</button>

showSuccess() {
 this.toasterService.showToast('Operation Successful!', 'success', 3000, 'center-center');
}

showError() {
 this.toasterService.showToast('An error occurred!', 'error', 4000, 'bottom-center');
}

showWarning() {
 this.toasterService.showToast('This is a warning!', 'warning', 5000, 'bottom-right');
}
