import { UIComponent } from '../common/ui/component';

export class NavigationUIComponent extends UIComponent {
  public initialize(): void {
    const body = this.container.querySelector('body');
    const menu = this.container.querySelector('[data-toggle-menu]');

    const onClickBody = (e: Event) => {
      body.classList.remove('menu-active');
      body.removeEventListener('click', onClickBody);
    };

    menu.addEventListener('click', (e) => {
      body.classList.add('menu-active');
      body.addEventListener('click', onClickBody);
      e.stopPropagation();
    });
  }
}
