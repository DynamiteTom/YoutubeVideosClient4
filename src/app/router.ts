import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'youtube-videos' },
    { path: 'youtube-videos', component: YouTubeComponent },
    { path: 'video-detail', component: VideoDetailComponent },
    { path: 'video-detail/:title/:pubDate/:descn/:vidid/:pos', component: VideoDetailComponent }
];

export const routing = RouterModule.forRoot(routes);
