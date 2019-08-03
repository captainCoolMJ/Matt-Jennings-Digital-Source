import $ from 'jquery';
import { HeaderUIComponent } from '../header/ui-component';
import { FooterUIComponent } from '../footer/ui-component';
import { NavigationUIComponent } from '../navigation/ui-component';
import { UISmoothScroller } from '../common/ui/smooth-scroller';
import { TimelineUIComponent } from '../timeline/ui-component';
import { Playhead } from '../lib/playhead';
import { TimelineRawEventInterface } from '../timeline/raw-event.interface';

import '../common/styles/reset.css';
import '../app/styles.css';
import '../section/styles.css';
import '../title/styles.css';
import '../header/styles.css';
import '../navigation/styles.css';
import '../timeline/styles.css';
import '../portfolio/styles.css';
import '../footer/styles.css';

const Grid = require('../lib/grid');

export const indexEntry = () => {
  const header = new HeaderUIComponent(document.querySelector('[data-id="header"]') as HTMLElement);
  const footer = new FooterUIComponent(document);
  const scroller = new UISmoothScroller();
  const nav = new NavigationUIComponent(document);
  const timeline = new TimelineUIComponent(document);
  const playhead = new Playhead();

  const $firstSection = $('[data-jump-link]').eq(0),
    $navNext = $('[data-nav-next]');

  let navSugTimer: ReturnType<typeof setTimeout>;

  playhead.setTrack({
    range: {
      in: 0,
      out: $firstSection.offset().top + 100,
    },
    destroy: true,
    playIn: () => {
      navSugTimer = setTimeout(() => {
        $navNext.fadeIn(1000);
      }, 1500);
    },
    playOut: () => {
      clearTimeout(navSugTimer);

      $navNext.fadeOut(500);
    },
  });
  header.initialize();
  footer.initialize();
  scroller.initialize($('html, body'));
  nav.initialize();

  // Load up the site data
  $.getJSON((window as any).__mjd.api.timeline, (data: Array<TimelineRawEventInterface>) => {
    timeline.initialize(data);
  });

  $(() => Grid.init());
};

indexEntry();
