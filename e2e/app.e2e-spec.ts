import { NavermapPage } from './app.po';

describe('navermap App', () => {
  let page: NavermapPage;

  beforeEach(() => {
    page = new NavermapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
