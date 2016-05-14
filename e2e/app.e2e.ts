import { OurPlanetsPage } from './app.po';

describe('our-planets App', function() {
  let page: OurPlanetsPage;

  beforeEach(() => {
    page = new OurPlanetsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('our-planets works!');
  });
});
