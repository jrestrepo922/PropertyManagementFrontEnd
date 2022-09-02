## Installing bootstrap ##
1. npm install --save bootstrap
2. add "node_modules/bootstrap/dist/css/bootstrap.min.css" in styles in the angular.json file. 



## Installin toast messages ##
1. npm install ngx-toastr --save
2. npm install @angular/animations --save
3. add "node_modules/ngx-toastr/toastr.css" in styles in the angular.json file. 
4. add to app module 
import { BrowserAnimationsModule } from ‘@angular/platform-browser/animations’;
import { ToastrModule } from ‘ngx-toastr’;
5. imports: [
...
BrowserAnimationsModule,
ToastrModule.forRoot()
],s