import { UIComponent } from './helper/ui/component';
import { uiToggleHoverClass } from './helper/ui/toggle-hover-class';

export class Header extends UIComponent {
    public initialize(): void {

        const selector = this.container.querySelectorAll('.title, .logo');
        const target = this.container.querySelector('.logo');

        uiToggleHoverClass(selector, target, 'hover');
    }
}