import { AppPage } from './app.po';

describe('bynd-tst-dec17 App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Beyond Test Dec 2017 app!');
    });

});
