import { ActorTemplateWebAppPage } from './app.po';

describe('actor-template-web-app App', () => {
  let page: ActorTemplateWebAppPage;

  beforeEach(() => {
    page = new ActorTemplateWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
