import { IdnowPageRoutingModule } from './idnow-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdnowPage } from './idnow.page';

@NgModule({
  imports: [CommonModule, IonicModule, IdnowPageRoutingModule],
  declarations: [IdnowPage],
})
export class IdnowPageModule {}
