import { AmbassadorHelpModulePage } from './app.po';

describe('ambassador-help-module App', () => {
  let page: AmbassadorHelpModulePage;

  beforeEach(() => {
    page = new AmbassadorHelpModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
