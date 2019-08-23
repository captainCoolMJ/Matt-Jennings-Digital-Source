import { imageLoad } from '../../common/image/load';
import { uiScrollTo } from '../../common/ui/scroll-to';
import { PortfolioGridOptionsInterface } from './options.interface';

export class PortfolioGridItem {
  public height: number;
  public itemElement: HTMLElement;

  private static marginExpanded = 10;

  private itemHeight: number;

  private thumbnailHeight: number;

  private titleElement: HTMLElement;
  private descriptionElement: HTMLElement;
  private hrefElement: HTMLAnchorElement;
  private loadingElement: HTMLElement;
  private fullImageElement: HTMLElement;
  private previewElement: HTMLElement;
  private largeImgElement: HTMLImageElement;

  constructor(item: HTMLElement, private options: PortfolioGridOptionsInterface) {
    this.itemElement = item;
    this.thumbnailHeight = item.offsetHeight;

    this.create();
    this.update();
  }

  public update(): void {
    const anchor = this.itemElement.querySelector('a');

    // update preview´s content
    const eldata = {
      href: anchor.href,
      largesrc: anchor.dataset.largesrc,
      title: anchor.dataset.title,
      description: anchor.dataset.description,
    };

    this.titleElement.innerHTML = eldata.title;
    this.descriptionElement.innerHTML = eldata.description;
    this.hrefElement.href = eldata.href;

    this.loadingElement.classList.remove('og-loading--hidden');

    imageLoad(eldata.largesrc).then(() => {
      this.loadingElement.classList.add('og-loading--hidden');
      this.fullImageElement.querySelectorAll('img').forEach((element) => element.remove());

      this.largeImgElement = new Image();
      this.largeImgElement.src = eldata.largesrc;
      this.fullImageElement.appendChild(this.largeImgElement);

      this.largeImgElement.classList.add('img--visible');
    });
  }

  public open(options?: { extraScroll: number }): void {
    this.itemElement.classList.add('og-expanded');

    options.extraScroll = options.extraScroll || 0;

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

    if (this.largeImgElement) {
      this.largeImgElement.classList.remove('img--visible');
    }

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
    this.itemHeight = itemHeight;

    const onEndFn = () => {
      this.itemElement.removeEventListener('transitionend', onEndFn);
      this.itemElement.classList.add('og-expanded');
    };

    this.previewElement.style.height = `${this.height}px`;
    this.itemElement.style.height = `${this.itemHeight}px`;
    this.itemElement.addEventListener('transitionend', onEndFn);
  }

  private create(): void {
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
        </div>
        <div class="og-details">
          <h3></h3>
          <p></p>
          <a href="#" class="btn_go" target="_blank">Live site</a>
        </div>
      </div>
    `;

    this.titleElement = this.previewElement.querySelector('h3');
    this.descriptionElement = this.previewElement.querySelector('p');
    this.hrefElement = this.previewElement.querySelector('.btn_go');
    this.loadingElement = this.previewElement.querySelector('.og-loading');
    this.fullImageElement = this.previewElement.querySelector('.og-fullimg');
  }
}
