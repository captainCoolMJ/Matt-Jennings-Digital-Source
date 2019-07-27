var $ = require('jquery');

var Grid = require('../lib/grid');
var Playhead = require('../lib/playhead');
var SmoothScroller = require('./helper/ui/smooth-scroller');
var Timeline = require('./timeline');
var Header = require('./header');
var Footer = require('./footer');
var Navigation = require('./navigation');

var entry = function () {

    var header = new Header(document);
    var footer = new Footer(document);
    var scroller = new SmoothScroller();
    var nav = new Navigation(document);
    var timeline = new Timeline(document);
    var playhead = new Playhead();

    var $firstSection = $('.jump_link').eq(0),
        $navNext = $('.sct-top .nav-next'),
        navSugTimer;

    playhead.setTrack({
        range: {
            in: 0,
            out: $firstSection.offset().top + 100 
        },
        destroy: true,
        playIn: function() {

            navSugTimer = setTimeout(function() {
                $navNext.fadeIn(1000);
            }, 1500);

        },
        playOut: function() {

            clearTimeout(navSugTimer);

            $navNext.fadeOut(500);
        }
    });
    header.initialize();
    footer.initialize();
    scroller.initialize($('html, body'));
    nav.initialize();

    // Load up the site data
    $.getJSON('data/site.json', function(data){
        //loadWork(data.work);
        timeline.initialize(data.timeline);
    });

    $(function() {
        Grid.init();
    });
};

entry();