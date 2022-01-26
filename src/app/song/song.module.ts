import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongPageRoutingModule } from './song-routing.module';

import { SongPage } from './song.page';
import { SongPipe } from '../song.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongPageRoutingModule
  ],
  declarations: [SongPage, SongPipe]
})
export class SongPageModule {}
