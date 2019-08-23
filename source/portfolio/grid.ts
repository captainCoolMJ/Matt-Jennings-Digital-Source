import { imageLoad } from '../common/image/load';
import { timingDelay } from '../common/timing/delay';
import { PortfolioGridOptionsInterface } from './grid/options.interface';
import { PortfolioGridItem } from './grid/item';

export class PortfolioGrid {
  private settings: PortfolioGridOptionsInterface = {
    minHeight: 500,
    speed: 350,
    easing: 'ease',
  };

  private gridElement: HTMLElement;
  private gridItemElements: NodeListOf<HTMLElement>;
  private activePreview: PortfolioGridItem;

  public initialize(grid: HTMLElement, config?: Partial<PortfolioGridOptionsInterface>): void {
    this.settings = {
      ...this.settings,
      ...config,
    };

    this.gridElement = grid;

    this.gridItemElements = this.gridElement.querySelectorAll('li');

    // preload all images
    Promise.all(
      Array.prototype.slice
        .call(this.gridElement.querySelectorAll('img'))
        .map((element: HTMLImageElement) => imageLoad(element.src)),
    ).then(() => {
      this.initializeEvents();
    });
  }

  private initializeEvents(): void {
    this.gridItemElements.forEach((element, index) => {
      element.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (target.closest('.og-close') !== null) {
          this.hidePreview();
        }

        if (target.closest('a[data-id="grid-item"]') !== null) {
          this.showPreview(element);
          e.preventDefault();
        }
      });
    });

    let delay: ReturnType<typeof timingDelay>;

    window.addEventListener('resize', () => {
      if (delay) {
        delay.clear();
      }

      delay = timingDelay(() => this.activePreview && this.hidePreview(), 150);
    });
  }

  private hidePreview(): void {
    this.activePreview.close();
    this.activePreview = null;
  }

  private showPreview(item: HTMLElement): void {
    let scrollExtra = 0;

    if (this.activePreview) {
      if (this.activePreview.itemElement === item) {
        return;
      }

      if (item.offsetTop > this.activePreview.itemElement.offsetTop) {
        scrollExtra = this.activePreview.height;
      }

      this.activePreview.close();
    }

    // update previewPos
    this.activePreview = new PortfolioGridItem(item, this.settings);
    this.activePreview.open({ extraScroll: scrollExtra });
  }
}
