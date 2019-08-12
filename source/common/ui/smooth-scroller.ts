import $ from 'jquery';
import 'jquery.easing';

/**
 * Navigate to internal links via smooth animation
 */
export class UISmoothScroller {
  private $container: JQuery<HTMLElement>;

  public initialize(container: HTMLElement | NodeListOf<HTMLElement>): void {
    this.$container = $(container);
    $('a[href*=#]:not([href=#])', this.$container).click(this.onClickLink.bind(this));
  }

  private getTarget(id: string): JQuery<HTMLElement> {
    return $(id, this.$container);
  }

  private goTo = (id: string) => {
    const $target = this.getTarget(id);

    if ($target.length) {
      this.$container.stop().animate(
        {
          scrollTop: $target.offset().top,
        },
        350,
        'easeInOutQuart',
      );
    }
  };

  private onClickLink = (e: MouseEvent) => {
    const target: HTMLAnchorElement = e.currentTarget as any;

    if (this.getTarget(target.hash).length) {
      this.goTo(target.hash);
      e.preventDefault();
    }
  };
}
