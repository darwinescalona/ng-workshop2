# NgWorkshop2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




V0.1

ng generate module app-routing --flat --module=app
ng g module template --module=app.routing --route=panel --routing=true

V0.2
ng g module shared --module=app.routing
ng g service shared/shared
mkdir src/app/shared/components 
mkdir src/app/shared/directives
mkdir src/app/shared/helpers
mkdir src/app/shared/models
mkdir src/app/shared/pipes

ng g module modules/public --module=app.routing --route=public --routing=true
ng g service modules/public/public
mkdir src/app/modules/public/components |
mkdir src/app/modules/public/directives |
mkdir src/app/modules/public/helpers |
mkdir src/app/modules/public/pipes |
mkdir src/app/modules/public/pages

ng g module modules/login --module=app.routing --route=login --routing=true
ng g service modules/login/login
mkdir src/app/modules/login/components |
mkdir src/app/modules/login/directives |
mkdir src/app/modules/login/helpers |
mkdir src/app/modules/login/pipes |
mkdir src/app/modules/login/pages

ng g module modules/dashboard --module=app.routing --route=dashboard --routing=true
ng g service modules/dashboard/dashboard
mkdir src/app/modules/dashboard/components |
mkdir src/app/modules/dashboard/directives |
mkdir src/app/modules/dashboard/helpers |
mkdir src/app/modules/dashboard/pipes |
mkdir src/app/modules/dashboard/pages

ng generate component pages/error --export=false --flat=true --inlineStyle=true --inlineTemplate=true --module=app

ng generate component modules/public/components/masthead --export=false --flat=false --inlineStyle=true --inlineTemplate=true --module=public

ng generate component modules/public/components/about --export=false --flat=false --inlineStyle=true --inlineTemplate=true --module=public

ng generate component modules/public/components/services --export=false --flat=false --inlineStyle=true --inlineTemplate=true --module=public

ng generate component modules/public/components/portfolio --export=false --flat=false --inlineStyle=true --inlineTemplate=true --module=public

ng generate component modules/public/components/contact --export=false --flat=false --inlineStyle=true --inlineTemplate=true --module=public

