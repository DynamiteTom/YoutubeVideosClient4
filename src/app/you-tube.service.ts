import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const VIDEOS_KEY = makeStateKey('videos');

@Injectable()
export class YouTubeService  {
  videos = [];

  youtubePath='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';
  
  constructor(private http: HttpClient, private state: TransferState) { 
        this.videos = this.state.get(VIDEOS_KEY, null as any);
  }

  getVideosStream(): Observable<any>
  {
      return this.http.get<any>(this.youtubePath);
  }

  getVideos():Promise<[any]>{
      return new Promise((resolve) => {

             this.getVideosStream().subscribe(res => {
                    console.log("In YouTubeService ",res.items);
                    this.videos = res.items;
                    this.state.set(VIDEOS_KEY, res.items as any);
                    resolve(res.items);
             },
             () => { resolve(null) });
       });
  }
}
