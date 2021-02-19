import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { DetalhePage } from '../detalhe/detalhe';
import { DetalhePageModule } from '../detalhe/detalhe.module';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
    MovieListComponent,
  ],
  imports: [
    DetalhePageModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
