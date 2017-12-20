import { VideosPage } from './pages/videos.po';

describe('bynd-tst-dec17 App', () => {
    let page: VideosPage;

    beforeEach(() => {
        page = new VideosPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Videos!');
    });

});
