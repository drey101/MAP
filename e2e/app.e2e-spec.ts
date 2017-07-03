import { MAPPage } from './app.po';

describe('map App', () => {
  let page: MAPPage;

  beforeEach(() => {
    page = new MAPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
