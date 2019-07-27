import $ from 'jquery';
import { Header } from './header';
import { Footer } from './footer';
import { Navigation } from './navigation';
import { UISmoothScroller } from './helper/ui/smooth-scroller';
import { Timeline } from './timeline';
import { Playhead } from '../lib/playhead';

const Grid = require('../lib/grid');

const entry = () => {
  const header = new Header(document);
  const footer = new Footer(document);
  const scroller = new UISmoothScroller();
  const nav = new Navigation(document);
  const timeline = new Timeline(document);
  const playhead = new Playhead();

  const $firstSection = $('.jump_link').eq(0),
    $navNext = $('.sct-top .nav-next');

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
  $.getJSON('data/site.json', (data: any) => {
    //loadWork(data.work);
    timeline.initialize(data.timeline);
  });

  $(() => Grid.init());
};

entry();
