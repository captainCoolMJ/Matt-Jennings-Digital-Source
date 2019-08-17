import { uiScrollIntoView } from './scroll-into-view';

/**
 * Navigate to internal links via smooth animation
 */
export class UISmoothScroller {
  private container: HTMLElement;

  public initialize(container: HTMLElement): void {
    this.container = container;
    this.container.querySelectorAll('a[href*=\\#]:not([href=\\#])').forEach((element) => {
      element.addEventListener('click', this.onClickLink);
    });
  }

  private scrollTo(target: Element): void {
    uiScrollIntoView(target, {
      duration: 350,
      easing: 'easeInOutQuart',
    });
  }

  private onClickLink = (e: MouseEvent) => {
    const target = this.container.querySelector((e.currentTarget as HTMLAnchorElement).hash);

    if (target) {
      e.preventDefault();
      this.scrollTo(target);
    }
  };
}
