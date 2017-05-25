import { DemoTwoPage } from './app.po';

describe('demo-two App', () => {
  let page: DemoTwoPage;

  beforeEach(() => {
    page = new DemoTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
