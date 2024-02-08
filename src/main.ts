
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.modules';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref=>{

}).catch(err=>console.error());