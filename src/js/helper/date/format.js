module.exports = function (time) {
    var date = new Date(time),
        monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        month = monthNames[date.getMonth()],
        year = date.getFullYear(),
        ms = Date.parse(date);

    // returns days since Jan 1, 1970
    return {
        'ms': ms,
        'formatted' : month + ' ' + year
    };
};