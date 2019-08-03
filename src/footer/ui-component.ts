import { UIComponent } from '../common/ui/component';

export class FooterUIComponent extends UIComponent {
  public initialize(): void {
    const dateYear = new Date().getFullYear();
    const dateSpan = this.container.querySelector('#date');

    dateSpan.innerHTML = String(dateYear);
  }
}
