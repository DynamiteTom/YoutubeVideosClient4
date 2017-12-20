import { Component, OnInit } from '@angular/core';
import { YouTubeService } from '../you-tube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.css']
})
export class YouTubeComponent implements OnInit {
videos = [];
title = "ABC";
descn = "";

  constructor(private youtubeService: YouTubeService, private router: Router, private route: ActivatedRoute) {
      console.log("YouTubeComponent constructor");
   }

  ngOnInit() {
      this.youtubeService.getVideos().then(vids =>{
          if (vids !== null)
          {
              console.log("In YouTubeComponent - about to get videos"); 
              this.videos = vids;
              console.log("In YouTubeComponent ", this.videos);
          }
      });
  }

  loadVideo(){
      console.log("loadVideo()");
      this.router.navigateByUrl('/video-detail');
  }

  tstClick(){
      console.log("tst click()");
  }

}
