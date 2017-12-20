import { browser, by, element } from 'protractor';

export class VideosPage {
    navigateTo() {
          return browser.get('/');
    }

    navigateToYoutubeVideos() {
          return browser.get('/youtube-videos');
    }

    navigateToVideoDetail() {
          return browser.get('/video-detail');
    }

    getParagraphText() {
          return element(by.css('app-you-tube')).getText();
    }
}
