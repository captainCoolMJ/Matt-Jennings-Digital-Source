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

export const notFoundEntry = () => {
  new HeaderUIComponent(document).initialize();
  new NavigationUIComponent(document).initialize();
  new FooterUIComponent(document).initialize();
};

notFoundEntry();
