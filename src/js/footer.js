var Footer = function (container) {
    this.container = container;
};

Footer.prototype.initialize = function () {
    var dateYear = (new Date()).getFullYear('yyyy');
    var dateSpan = this.container.getElementById('date');

    dateSpan.innerHTML = dateYear;
};

module.exports = Footer;