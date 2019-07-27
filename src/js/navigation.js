var Navigation = function (container) {
    this.container = container;
};

Navigation.prototype.initialize = function () {

    var body = this.container.querySelector('body');
    var menu = this.container.getElementById('toggleMenu');

    var onClickBody = function (e) {
        body.classList.remove('menu-active');
        body.removeEventListener('click', onClickBody);
    };

    menu.addEventListener('click', function (e) {
        body.classList.add('menu-active');
        body.addEventListener('click', onClickBody);
    });
};

module.exports = Navigation;