var $ = require('jquery');

require('jquery.easing');

var script = require('./script');
var Grid = require('../lib/grid');
var playHead = require('../lib/playhead');

script($);

$(function() {
    Grid.init();
});

var navSuggestionTimer = function(action) {
    return setTimeout(function() {
        action();
    }, 4000);
};

var $firstSection = $('.jump_link').eq(0),
    $navNext = $('.sct-top .nav-next'),
    navSugTimer;

var track = {
    'range': {
        'in': 0,
        'out': $firstSection.offset().top + 100 
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
};

playHead.setTrack(track);
