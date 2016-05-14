export class OurPlanetsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('our-planets-app h1')).getText();
  }
}
