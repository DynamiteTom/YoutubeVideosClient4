import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubeService } from './you-tube.service';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';


import { routing } from './router';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ 
          appId: 'ng-cli-universal' 
    }),
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    MatFormFieldModule,
    MatInputModule,
  //  RouterModule,
    routing
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [YouTubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
