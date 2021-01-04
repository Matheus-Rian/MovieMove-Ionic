import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaListaPage } from './minha-lista';

@NgModule({
  declarations: [
    MinhaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhaListaPage),
  ],
})
export class MinhaListaPageModule {}
