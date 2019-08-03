import { UIComponent } from '../common/ui/component';
import { uiToggleHoverClass } from '../common/ui/toggle-hover-class';

export class HeaderUIComponent extends UIComponent {
  public initialize(): void {
    const selector = this.container.querySelectorAll('.title, .logo');
    const target = this.container.querySelector('.logo');

    uiToggleHoverClass(selector, target, 'hover');
  }
}
