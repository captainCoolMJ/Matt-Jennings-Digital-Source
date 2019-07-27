var $ = require('jquery');

require('jquery.easing');

/**
 * Navigate to internal links via smooth animation
 */
var UISmoothScroller = function () {

    this.onClickLink = function (e) {
        if (this.getTarget(e.currentTarget.hash).length) {
            this.goTo(e.currentTarget.hash);
            e.preventDefault();
        }
    };
};

UISmoothScroller.prototype.initialize = function ($container) {
    this.$container = $container;
    $('a[href*=#]:not([href=#])', this.$container).click(this.onClickLink.bind(this));
};

UISmoothScroller.prototype.getTarget = function (id) {
    return $(id, this.$container);
};

UISmoothScroller.prototype.goTo = function (id) {

    var $target = this.getTarget(id);

    if ($target.length) {
        this.$container.stop().animate({
            scrollTop: $target.offset().top,
        }, 350, 'easeInOutQuart');
    }
};

module.exports = UISmoothScroller;

