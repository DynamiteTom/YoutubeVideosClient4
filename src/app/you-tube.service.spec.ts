import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { YouTubeService } from './you-tube.service';

describe('YouTubeService', () => {
  // videos = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeService]
    });
  });
/*
  it('should get first video details', , inject([YouTubeService], (service: YouTubeService) => {
    // Observable<[]> = service.getVideos(): Observable<[]>
    
    expect(service).toBeTruthy();
  }));
*/
  it('should be created', inject([YouTubeService], (service: YouTubeService) => {
    expect(service).toBeTruthy();
  }));
});
