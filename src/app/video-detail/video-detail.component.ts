import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  video:any;
  vidTitle: string;
  vidPubDate: string;
  vidDescn: string;
  vidId: string = 'https://www.youtube.com/embed/';
  posn: number;

  vidId2 = "https://www.youtube.com/embed/X0qwQqwKL";
  constructor(private route: ActivatedRoute, private el: ElementRef) {
      console.log("VideoDetail Constructor");
       
      this.route.params.subscribe(params => {
          this.vidTitle = params['title'];
          this.vidPubDate = params['pubDate'];
          this.vidDescn = params['descn'];
          this.vidId += params['vidid'];
          this.posn = params['pos'];
          console.log("vidId is " + this.vidId + " and posn is " + this.posn);
      });
   
   }

   ngOnInit() {
      this.el.nativeElement.querySelector('iframe#dynFrame').src=this.vidId;
   }

}
