import { Header } from './header';
import { Footer } from './footer';
import { Navigation } from './navigation';

const entry = () => {
  new Header(document).initialize();
  new Footer(document).initialize();
  new Navigation(document).initialize();
};

entry();
