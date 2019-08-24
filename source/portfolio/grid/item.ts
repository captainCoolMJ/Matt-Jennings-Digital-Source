import { imageLoad } from '../../common/image/load';
import { uiScrollTo } from '../../common/ui/scroll-to';
import { PortfolioGridOptionsInterface } from './options.interface';
import { AppInternationalizationType } from '../../app/types';

export class PortfolioGridItem {
  public height: number;
  public itemElement: HTMLElement;

  private static marginExpanded = 10;

  private href: string;
  private largesrc: string;
  private title: string;
  private description: string;

  private thumbnailHeight: number;

  private previewElement: HTMLElement;

  constructor(
    private intl: AppInternationalizationType,
    item: HTMLElement,
    private options: PortfolioGridOptionsInterface,
  ) {
    this.itemElement = item;
    this.thumbnailHeight = item.offsetHeight;
  }

  public setData({ href = '', largesrc = '', title = '', description = '' }): void {
    this.href = href;
    this.largesrc = largesrc;
    this.title = title;
    this.description = description;
  }

  public open(options?: { extraScroll: number }): void {
    options = {
      extraScroll: 0,
      ...options,
    };

    this.renderHTML();

    imageLoad(this.largesrc).then(() => {
      this.previewElement.querySelector('.og-loading').classList.add('og-loading--hidden');
      this.previewElement.querySelector('.og-fullimg img').classList.add('img--visible');
    });

    // set the height for the preview and the item
    this.setHeights();

    // scroll to position the preview in the right place
    let scrollOffset = this.previewElement.getBoundingClientRect().top - options.extraScroll;

    if (this.height < window.innerHeight) {
      scrollOffset -= window.innerHeight - this.height;
    }

    uiScrollTo(scrollOffset, {
      duration: this.options.speed,
      easing: 'easeInOutQuart',
    });
  }

  public close(): void {
    this.itemElement.classList.remove('og-expanded');

    const onEndFn = (e: Event) => {
      this.itemElement.removeEventListener('transitionend', onEndFn);
      this.previewElement.remove();
    };

    this.previewElement.style.height = '0px';

    this.itemElement.addEventListener('transitionend', onEndFn);
    this.itemElement.style.height = `${this.thumbnailHeight}px`;
  }

  private setHeights(): void {
    let heightPreview = window.innerHeight - this.thumbnailHeight - PortfolioGridItem.marginExpanded;
    let itemHeight = window.innerHeight;

    if (heightPreview < this.options.minHeight) {
      heightPreview = this.options.minHeight;
      itemHeight = this.options.minHeight + this.thumbnailHeight + PortfolioGridItem.marginExpanded;
    }

    this.height = heightPreview;

    itemHeight = itemHeight;

    const onEndFn = () => {
      this.itemElement.removeEventListener('transitionend', onEndFn);
      this.itemElement.classList.add('og-expanded');
    };

    this.previewElement.style.height = `${this.height}px`;
    this.itemElement.style.height = `${itemHeight}px`;
    this.itemElement.addEventListener('transitionend', onEndFn);
  }

  private renderHTML(): void {
    // create Preview structure:
    this.itemElement.style.transition = `height ${this.options.speed}ms ${this.options.easing}`;

    this.previewElement = document.createElement('div');
    this.itemElement.appendChild(this.previewElement);

    this.previewElement.classList.add('og-expander');
    this.previewElement.style.transition = `height ${this.options.speed}ms ${this.options.easing}`;

    this.previewElement.innerHTML = `
      <div class="og-expander-inner">
        <span class="og-close"></span>
        <div class="og-fullimg">
          <div class="og-loading"></div>
          <img data-id="grid-item-largesrc" src="${this.largesrc}" />
        </div>
        <div class="og-details">
          <h3 data-id="grid-item-title">${this.title}</h3>
          <p data-id="grid-item-description">${this.description}</p>
          <a 
            data-id="grid-item-link" 
            href="${this.href}" 
            class="btn_go" 
            target="_blank"
          >
            ${this.intl.translate('portfolio.link.liveSite')}
          </a>
        </div>
      </div>
    `;
  }
}
