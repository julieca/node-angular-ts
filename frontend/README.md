# Frontend

Here are the corrected sentences with improved grammar:

Something that I haven't covered in this project:

1. Pages are usually separated per parent route segment and need to create their module. This can help import dependencies that are only used in the module. For example, `/product` and `/product/:id` will be in the same module. I haven't implemented this because we only have one route.

2. In the filter bar, selections should be clearable. I would be happy to work on these.

Additionally, I have added a UI library named Nebular. Please refer to [https://akveo.github.io/nebular/](https://akveo.github.io/nebular/) for more information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
