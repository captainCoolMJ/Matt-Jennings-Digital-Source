import { HeaderUIComponent } from './ui-component';
import { headerComponent } from './component.server';
import { uiToggleHoverClass } from '../common/ui/toggle-hover-class';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

jest.mock('../common/ui/toggle-hover-class');

describe('HeaderUIComponent', () => {
  it('should initialize the toggle hover between title and logo', () => {
    const container = document.createElement('div');

    container.innerHTML = headerComponent(AppInternationalizationServiceMock())({ title: 'Title' });

    const selector = container.querySelectorAll('.title, .logo');
    const target = container.querySelector('.logo');

    const header = new HeaderUIComponent(container);
    header.initialize();

    expect(uiToggleHoverClass).toHaveBeenCalledWith(selector, target, 'hover');
  });
});
