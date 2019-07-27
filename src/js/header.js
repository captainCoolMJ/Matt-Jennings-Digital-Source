var toggleHoverClass = require('./helper/ui/toggle-hover-class');

var Header = function (container) {
    this.container = container;
};

Header.prototype.initialize = function () {
    var selector = this.container.querySelectorAll('.title, .logo');
    var target = this.container.querySelector('.logo');

    toggleHoverClass(selector, target, 'hover');
};

module.exports = Header;