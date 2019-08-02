import { Header } from './header';
import { Footer } from './footer';
import { Navigation } from './navigation';

import './common/styles/reset.css';
import './app/styles.css';

const entry = () => {
  new Header(document).initialize();
  new Footer(document).initialize();
  new Navigation(document).initialize();
};

entry();
