var Header = require('./header');
var Footer = require('./footer');
var Navigation = require('./navigation');

var entry = function () {

    var header = new Header(document);
    var footer = new Footer(document);
    var nav = new Navigation(document);
    
    header.initialize();
    footer.initialize();
    nav.initialize();
};

entry();