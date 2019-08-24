import { HeaderUIComponent } from '../header/ui-component';
import { FooterUIComponent } from '../footer/ui-component';
import { NavigationUIComponent } from '../navigation/ui-component';

import '../common/styles/reset.css';
import '../app/styles.css';
import '../section/styles.css';
import '../title/styles.css';
import '../header/styles.css';
import '../navigation/styles.css';
import '../footer/styles.css';
import { AppInternationalizationService } from '../app/internationalization.service';

export const notFoundEntry = (document: Document) => {
  if (window.__mjd) {
    AppInternationalizationService().initialize('en-US', window.__mjd.messages);
  }

  new HeaderUIComponent(document.querySelector('[data-id="header"]') as HTMLElement).initialize();
  new NavigationUIComponent(document).initialize();
  new FooterUIComponent(document.querySelector('[data-id="footer"]') as HTMLElement).initialize();
};

notFoundEntry(document);
