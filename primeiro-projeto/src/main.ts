import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  var minhaVar = 'minha variavel';

  function minhaFunc(x,y){
    return x + y;
  }

  let num = 2;
  const PI = 3.14;

  var numeros = [1,2,3];

  numeros.map(function(valor){
    return valor * 2;
  })

  numeros.map(valor => valor * 2);

  class Matematica {
    soma(x,y){
      return x + y;
    }
  }
