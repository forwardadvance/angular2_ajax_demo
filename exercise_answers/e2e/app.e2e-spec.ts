import { FlickrPage } from './app.po';

describe('flickr App', () => {
  let page: FlickrPage;

  beforeEach(() => {
    page = new FlickrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
