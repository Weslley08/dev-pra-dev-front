import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
// import { environmentProd } from './environments/environment.prod';

// Localmente
if (environment.production) {
  enableProdMode();
}

// Em produção
// if (environmentProd.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
