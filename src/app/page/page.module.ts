import {NgModule} from '@angular/core';
import {PageComponent} from './page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
