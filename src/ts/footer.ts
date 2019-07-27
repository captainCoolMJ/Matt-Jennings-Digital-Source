import { UIComponent } from './helper/ui/component';

export class Footer extends UIComponent {
  public initialize(): void {
    const dateYear = new Date().getFullYear();
    const dateSpan = this.container.querySelector('#date');

    dateSpan.innerHTML = String(dateYear);
  }
}
