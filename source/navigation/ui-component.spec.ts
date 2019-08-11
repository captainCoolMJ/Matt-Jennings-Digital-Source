import { NavigationUIComponent } from './ui-component';

describe('NavigationUIComponent', () => {
  it('should add menu toggling', () => {
    document.body.innerHTML = `
      <span data-toggle-menu="true"></span>
    `;

    const menu = document.querySelector('[data-toggle-menu]');
    const navigation = new NavigationUIComponent(document);
    const event = new MouseEvent('click');

    navigation.initialize();
    menu.dispatchEvent(event);
    expect(document.body.classList).toContain('menu-active');

    document.body.dispatchEvent(event);

    expect(document.body.classList).not.toContain('menu-active');
  });
});
