/**
 * We need to mock classnames so we can use them as selectors in our tests, so we use a JS
 * proxy object to simply return the key that's passed in
 **/
module.exports = new Proxy({}, {
    get: function (obj, prop) {
        if (prop === '__esModule') {
            return false;
        }

        return prop;
    }
});
