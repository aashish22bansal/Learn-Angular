// IMPORTING SOME OF THE REQUIRED MODULES
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // This is where the Application STARTS by passing the "AppModule" to the bootstrapModule() method.
  // Here, AppModule refers to the "app.module.ts" file in the src->app folder.
