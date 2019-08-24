import { HeaderUIComponent } from '../header/ui-component';
import { FooterUIComponent } from '../footer/ui-component';
import { NavigationUIComponent } from '../navigation/ui-component';
import { UISmoothScroller } from '../common/ui/smooth-scroller';
import { Playhead } from '../lib/playhead';
import { timingDelay } from '../common/timing/delay';
import { PortfolioGrid } from '../portfolio/grid';
import { AppInternationalizationService } from '../app/internationalization.service';

import '../common/styles/reset.css';
import '../app/styles.css';
import '../section/styles.css';
import '../title/styles.css';
import '../header/styles.css';
import '../navigation/styles.css';
import '../timeline/styles.css';
import '../portfolio/styles.css';
import '../footer/styles.css';

export const indexEntry = (document: Document) => {
  const translations = AppInternationalizationService();

  if (window.__mjd) {
    translations.initialize('en-US', window.__mjd.messages);
  }

  const navNextElement: HTMLElement = document.querySelector('[data-nav-next]');

  if (navNextElement) {
    let delay: ReturnType<typeof timingDelay>;

    const playhead = new Playhead();
    playhead.initialize();
    playhead.addTrack({
      range: {
        in: 0,
        out: 100,
      },
      destroy: true,
      playIn: () => {
        delay = timingDelay(() => navNextElement.classList.add('nav-next--visible'), 1500);
      },
      playOut: () => {
        if (delay) {
          delay.clear();
        }
        navNextElement.classList.remove('nav-next--visible');
      },
    });
  }

  const headerContainer = document.querySelector('[data-id="header"]');
  if (headerContainer) {
    const header = new HeaderUIComponent(headerContainer as HTMLElement);
    header.initialize();
  }

  const footerContainer = document.querySelector('[data-id="footer"]');
  if (footerContainer) {
    const footer = new FooterUIComponent(footerContainer as HTMLElement);
    footer.initialize();
  }

  new UISmoothScroller().initialize(document.body);
  new NavigationUIComponent(document).initialize();

  const portfolioContainer = document.getElementById('og-grid');
  if (portfolioContainer) {
    new PortfolioGrid().initialize(document.getElementById('og-grid'));
  }
};

indexEntry(document);
