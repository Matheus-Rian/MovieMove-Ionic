import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MovieListComponent } from './movie-list/movie-list.component';
@NgModule({
	declarations: [MovieListComponent],
	imports: [
		IonicModule
	],
	exports: [MovieListComponent]
})
export class ComponentsModule {}
