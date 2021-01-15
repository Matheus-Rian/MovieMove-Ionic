import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
    MovieListComponent,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
