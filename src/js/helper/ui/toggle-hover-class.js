/**
 * Adds a hover class so multiple elements can activate a hover
 */ 
module.exports = function(selector, target, className) {
    for (var i = 0; i < selector.length; i++) {
        selector[i].addEventListener('mouseover', function () {
            target.classList.add(className);
        });
        selector[i].addEventListener('mouseout', function () {
            target.classList.remove(className);
        });
    }
};